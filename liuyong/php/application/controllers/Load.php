<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Load extends CI_Controller {

    public function __construct()
    {
        if(!empty($_COOKIE['ci_session'])){
            setcookie('ci_session',$_COOKIE['ci_session'],time()+60*60*24*30);
        }
        parent::__construct();
        $this->appid = $this->config->config['appkey']['appid'];
        $this->appsecret = $this->config->config['appkey']['appsecret'];
    }

	public function index()
	{
        $data['url'] = $_GET['url'];
        $this->load->view('index',$data);
	}


    public function gopage(){
        var_dump($this->session);
    }

}
