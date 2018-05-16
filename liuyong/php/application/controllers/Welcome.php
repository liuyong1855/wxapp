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
        $encryptedData="CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZMQmRzooG2xrDcvSnxIMXFufNstNGTyaGS9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+3hVbJSRgv+4lGOETKUQz6OYStslQ142dNCuabNPGBzlooOmB231qMM85d2/fV6ChevvXvQP8Hkue1poOFtnEtpyxVLW1zAo6/1Xx1COxFvrc2d7UL/lmHInNlxuacJXwu0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn/Hz7saL8xz+W//FRAUid1OksQaQx4CMs8LOddcQhULW4ucetDf96JcR3g0gfRK4PC7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns/8wR2SiRS7MNACwTyrGvt9ts8p12PKFdlqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYVoKlaRv85IfVunYzO0IKXsyl7JCUjCpoG20f0a04COwfneQAGGwd5oa+T8yO5hzuyDb/XcxxmK01EpqOyuxINew==";
        $iv = 'r7BXXKkLb8qrSNn05n0qiA==';
        $this->load->library('wxbizdatacrypt', array('appid'=>'wx4f4bc4dec97d474b','sessionKey'=>'tiihtNczf5v6AKRyjwEUhQ=='));
        $errCode = $this->wxbizdatacrypt->decryptData($encryptedData, $iv, $data );
        if ($errCode == 0) {
            print($data . "\n");
        } else {
            print($errCode . "\n");
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
