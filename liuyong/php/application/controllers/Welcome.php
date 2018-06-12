<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->appid = $this->config->config['appkey']['appid'];
        $this->appsecret = $this->config->config['appkey']['appsecret'];
    }

	public function index()
	{
        $three_session = $_POST['three_session'];
        // var_dump($this->session->$three_session);
		$result = array(
            'code'=>1,
            'msg'=>$this->session->$three_session
        );
        echo json_encode($result);
		exit;
	}


    public function test(){
        $encryptedData = "QOYssGdydJ960n+xaI5UnPeXh1hX0P2O6xWfZxy+8wZ87WI3PQO2cVlWOjiEgJEB86qUH2sQp6+ogi+0uNVaiFbAW2byKXLIU9mO54KJbjjmDoN2jQ6fpO94W+of7JzdMVntq+xzlEbXUpgNtyyDf8Wf/kWrjXtnJeNLEEldaUqLmmzy1YQ5TK/3YtctUELRyEEfXHxjhsIEw2s6BLcXY7JYQxcX4rp8cxn3GYMC5VPmVV7avLOAigG1DdITUwoaWAFUbhJDNy57rW+XxHpLluVcJL2zdT2BdEJEQ6YBjOswI+NurQrCOGrpyzQJbrLn6cW55OCLMTyQixJAEsLvt72eiXJoXXvDvmfPJyYpw7XCKA3GBXON3C5uOag/uLzRsmhTjBAhiTk9C/j0YR4+9XCt8kAuLYVLO/aZOVaNzEeshCKvELLzf2B+v7mcaskhI/r39UAnE86hvIZ/4816sQylPnRmF0GIRKYlzev6n4M=";
        $iv = '9yVF+gFBwcX99CtWolJt/A==';
        $this->load->library('wxbizdatacrypt', array('appid'=>'wxc306e633ffa63472','sessionKey'=>'BIIyJECA0yuRyhWuVptfkw=='));
        $errCode = $this->wxbizdatacrypt->decryptData($encryptedData, $iv, $data );
        if ($errCode == 0) {
            var_dump($data);
        } else {
            var_dump($errCode);
        }
    }

    public function login(){
        if($_POST['code']){
            // $rawData = json_decode($_POST['rawData']);
            $params_api = $this->config->config['apis']['session_key'];
            $params_api['param']['appid'] = $this->appid;
            $params_api['param']['secret'] = $this->appsecret;
            $params_api['param']['js_code'] = $_POST['code'];
            $params_api['param']['grant_type'] = 'authorization_code';
            //获取用户openid和session_key
            $result=json_decode($this->api->get_data($params_api),true);
            if($result){
                // $rawData = $_POST['rawData'];
                // $signature_str = sha1($_POST['rawData'].$result['session_key']);
                // $signature = $_POST['signature'];
                // $iv = $_POST['iv'];
                // $encryptedData = $_POST['encryptedData'];
                // $this->load->library('wxbizdatacrypt', array('appid'=>$this->appid,'sessionKey'=>$result['session_key']));
                // $errCode = $this->wxbizdatacrypt->decryptData($encryptedData, $iv, $data );
                // var_dump($data);
                $three_session = $this->randomFromDev(16);
                $sessionid = session_id();
                $this->session->$three_session = $result;
                //查询用户是否存在
                $query = $this->db->query("select * from user where openid='".$result["openid"]."'");
                $row = $query->row();
                if(!isset($row)){
                    //插入用户
                    $query = $this->db->query("insert into user (openid,createtime) values ('".$result["openid"]."',".$_SERVER["REQUEST_TIME"].")");
                    if(!$query){
                        $result = array(
                            'code'=>1,
                            'msg'=>'操作失败'
                        );
                        echo json_encode($result);
                        exit;
                    }
                }
                $data = array();
                $data['three_session'] = $three_session;
                $data['sessionid'] = $sessionid;
                $result = array(
                    'code'=>0,
                    'msg'=>'操作成功',
                    'data' => $data
                );
                echo json_encode($result);
                exit;
            }else{
                $result = array(
                    'code'=>1,
                    'msg'=>'操作失败'
                );
                echo json_encode($result);
                exit;
            }
        }else{
            $result = array(
                'code'=>1,
                'msg'=>'code不存在'
            );
            echo json_encode($result);
            exit;
        }
    }

	//wx.uploadFile
    public function uploadFile()
    {
        $dday = date('d',strtotime(date('Y-m-d')));
        $dmonth = date('m',strtotime(date('Y-m-d')));
        $upload_path      = $this->config->config['base_path'].'upload/';
        $upload_path_m = $upload_path.$dmonth.'/';
        if (!is_dir($upload_path_m)) mkdir($upload_path_m, 0777);
        $upload_path_m_d = $upload_path_m.$dday.'/';
        if (!is_dir($upload_path_m_d)) mkdir($upload_path_m_d, 0777);
        $config['upload_path']      = $upload_path_m_d;
        $config['allowed_types']    = 'gif|jpg|png|jpeg|jpe';
        $config['max_size']     = 4096;
        // $config['max_width']        = 1024;
        // $config['max_height']       = 768;
        $this->load->library('upload', $config);
        if ( ! $this->upload->do_upload('userfile'))
        {
            $error = array('error' => $this->upload->display_errors());
            $result = array(
                'code'=>1,
                'msg'=>$error
            );
        }else{
            $data = $this->upload->data();
            $path = "http://wxapp.c88s.com/upload/".$dmonth.'/'.$dday.'/'.$data['file_name'];
            $result = array(
                'code'=>0,
                'msg'=>'操作成功',
                'data' => $path
            );
        }

        echo json_encode($result);
        exit;
    }

    public function login_v2(){
        if($_POST['code']){
            // $rawData = json_decode($_POST['rawData']);
            $params_api = $this->config->config['apis']['session_key'];
            $params_api['param']['appid'] = $this->appid;
            $params_api['param']['secret'] = $this->appsecret;
            $params_api['param']['js_code'] = $_POST['code'];
            $params_api['param']['grant_type'] = 'authorization_code';
            //获取用户openid和session_key
            $result=json_decode($this->api->get_data($params_api),true);
            if($result){
                // var_dump($result);
                $three_session = $this->randomFromDev(16);
                $sessionid = session_id();
                $this->session->$three_session = $result;
                //查询用户是否存在
                $query = $this->db->query("select * from user where openid='".$result["openid"]."'");
                $row = $query->row();
                if(!isset($row)){
                    //插入用户
                    $query = $this->db->query("insert into user (openid,createtime) values ('".$result["openid"]."',".$_SERVER["REQUEST_TIME"].")");
                    if(!$query){
                        $result = array(
                            'code'=>1,
                            'msg'=>'操作失败'
                        );
                        echo json_encode($result);
                        exit;
                    }
                }
                $data = array();
                $data['three_session'] = $three_session;
                $data['sessionid'] = $sessionid;
                // $data['session_key'] = $result;
                $result = array(
                    'code'=>0,
                    'msg'=>'操作成功',
                    'data' => $data
                );
                echo json_encode($result);
                exit;
            }else{
                $result = array(
                    'code'=>1,
                    'msg'=>'操作失败'
                );
                echo json_encode($result);
                exit;
            }
        }else{
            $result = array(
                'code'=>1,
                'msg'=>'code不存在'
            );
            echo json_encode($result);
            exit;
        }
    }

    public function index_v2()
    {
        $three_session = $_POST['three_session'];
        // var_dump($this->session->$three_session);
        $result = array(
            'code'=>1,
            'data'=>$this->session->$three_session
        );
        echo json_encode($result);
        exit;
    }

    public function decrypt(){
        if($_POST['encryptedData']&&$_POST['iv']){
            $sessionkey = $_POST['three_session'];
            $session_key = $this->session->userdata[$sessionkey]['session_key'];
            $appid = $this->appid;
            $appsecret = $this->appsecret;
            $encryptedData = $_POST['encryptedData'];
            $iv = $_POST['iv'];
            $this->load->library('wxbizdatacrypt', array('appid'=>$appid,'sessionKey'=>$session_key));
            $errCode = $this->wxbizdatacrypt->decryptData($encryptedData, $iv, $data );
            if ($errCode == 0) {
                // var_dump(json_decode($data));exit;
                $result = array(
                    'code'=>0,
                    'msg'=>'操作成功',
                    'data' => json_decode($data)
                );
                echo json_encode($result);
            } else {
                // var_dump($errCode);
                $result = array(
                    'code'=>1,
                    'msg'=>$errCode
                );
                echo json_encode($result);
            }
        }else{
            $result = array(
                'code'=>1,
                'msg'=>'参数错误'
            );
            echo json_encode($result);
        }
    }

    private function randomFromDev($len) {
        $fp = @fopen('/dev/urandom','rb');
        $result = '';
        if ($fp !== FALSE) {
            $result .= @fread($fp, $len);
            @fclose($fp);
        }
        else
        {
            trigger_error('Can not open /dev/urandom.');
        }
        // convert from binary to string
        $result = base64_encode($result);
        // remove none url chars
        $result = strtr($result, '+/', '-_');

        return substr($result, 0, $len);
    }
}
