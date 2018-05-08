<?php

/**
 * 
 * 接口入口类
 * @author hayek
 *
 */
require_once 'Snoopyclass.php';

class Api {
	
	protected $api;
	private $CI;
	
	//初始化snoopy
	public function __construct(){
		$this->CI = &get_instance();
		$this->api = new Snoopyclass;

	}
	
	/**
	 * [get_data description]
	 * @param  array   $data    [数据]
	 * @param  boolean $decode  [是否解json]
	 * @param  boolean $delHTML [去除一些标签]
	 * @param  array   $aExt    [description]
	 * @return [type]           [description]
	 */
	public function get_data($data = array(),$decode=false,$delHTML=true,$aExt=array())
	{
		//设置header信息
        $this->api->rawheaders = array(
            '_p' => '2', //平台
            '_o' => '2', //应用来源
            '_n' => '0', //是否原生
            '_v' => '2.6.0',//版本号
            '_nv' => '2.6.0',//版本号
            '_m' => '' //设备型号
        );
		if(empty($data['uri']))
		{
			return false;
		}else{
			$uri  = $data['uri'];
		}
		//调用接口参数中如果有token则使用，否者使用定义token
		if (!isset($data['param']['token'])) {
			$data['param']['token'] = 'notworkin252';
		}
		switch ( $data['action'] ) {
			case 'fetchtext':
				$param = ''; 
				if(!empty($data['param']) && is_array($data['param']))
				{
					
					foreach ($data['param'] as $k => $v){
						$param  .= empty($param) ? '?' : '&';
						$param  .= $k.'='.$v;
					}
				}
				$this->api->fetchtext($uri.$param);
			break;
			
			case 'submit':
				$param = array(); 
				if(!empty($data['param']) && is_array($data['param']))
				{
					foreach ($data['param'] as $k => $v){
						$param[$k]   =   $v;
					}
				}
				
				if(!empty($data['reqData']) && is_array($data['reqData']))
				{
					
						$param['reqData']   =   json_encode($data['reqData']);
					
				}
				$this->api->submit($uri, $param, '');
			break;
			
			default:
				$this->api->results = '';
			break;
		}
		$data	=	$this->api->results;
		if($delHTML)
		{
			$data = delHtml($data);
		}
		if($decode)
		{
			$data = json_decode($data,true);
		}
		// if($token == 0){
		// 	if($data['code'] == 1){
		// 		$this->CI->weixin->userLogin($aExt['openid']);
		// 	}
		// }
		
		return $data;
	}
	
	//解析XML数据为对象
	// public function transformXmlToObject($xmlData){
	// 	return $data = new SimpleXMLElement($xmlData);
	// }

}
