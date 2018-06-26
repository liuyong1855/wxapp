<?php
//刘勇
// $config['appkey'] = array(
//    'appid' => 'wxce3e35ffb30a8571',
//    'appsecret' => '5bf4531b0e200298d537c8a7c32b0590'
// );
//7lk
$config['appkey'] = array(
   'appid' => 'wxc306e633ffa63472',
   'appsecret' => '92c4519ebab2089f941050993e6a1f09'
);
//xcx6
// $config['appkey'] = array(
//    'appid' => 'wx5ec3c47b0cf6d676',
//    'appsecret' => 'd3e2556c9a8c1bb01fa2ca4a05e9cd57'
// );

$config['apis'] = array(
    'baseapi' => 'https://api.weixin.qq.com/',
);

$config['base_path'] = '/Users/liuyong/copycode/wxapp/liuyong/php/';

/**--------------------------------------**/
$config['apis']['session_key'] = array(
    'uri' => $config['apis']['baseapi'] . 'sns/jscode2session',
    'action' => 'submit',
    'param' => array(
    )
);