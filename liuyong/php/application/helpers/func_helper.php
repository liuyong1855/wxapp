<?php

/**
 * 输出带格式
 * @param    string|array   $msg
 */
function dump($msg) {
    echo "<pre>";
    print_r($msg);
    echo "</pre>";
}
/**
 * 输出带格式,输出后停止运行
 * @param    string|array   $msg
 */
function dumpe($msg) {
    echo "<pre>";
    print_r($msg);
    echo "</pre>";
    exit;
}
/**
 * 获得UTF8编码字符串
 * @param string $str
 * @return string
 */
function getUtf8($str) {
    $str = urldecode($str);
    if (is_utf8($str)) {
    } else {
        $str = iconv("GB2312", "UTF-8", $str);
    }
    return $str;
}
/**
 * 是否UTF8编码字符串
 * @param string $string
 * @return string
 */
function is_utf8($string) {
    return preg_match('%^(?:
			[\x09\x0A\x0D\x20-\x7E]            # ASCII
			| [\xC2-\xDF][\x80-\xBF]             # non-overlong 2-byte
			|  \xE0[\xA0-\xBF][\x80-\xBF]        # excluding overlongs
			| [\xE1-\xEC\xEE\xEF][\x80-\xBF]{2}  # straight 3-byte
			|  \xED[\x80-\x9F][\x80-\xBF]        # excluding surrogates
			|  \xF0[\x90-\xBF][\x80-\xBF]{2}     # planes 1-3
			| [\xF1-\xF3][\x80-\xBF]{3}          # planes 4-15
			|  \xF4[\x80-\x8F][\x80-\xBF]{2}     # plane 16
	)*$%xs', $string);
}
function createNewArray($array = array(), $modify_array = array(), $del_array = array()) {
    if (!empty($modify_array)) {//需要修改或添加的值
        foreach ($modify_array as $k => $v) {
            $array[$k] = $v;
        }
    }
    if (!empty($del_array)) {//需要删除的健值
        foreach ($del_array as $k => $v) {
            unset($array[$v]);
        }
    }
    return $array;
}
//返回0－25 与 A－Z的对应
function getAZ() {
    return $data = array(
        0 => 'A',
        1 => 'B',
        2 => 'C',
        3 => 'D',
        4 => 'E',
        5 => 'F',
        6 => 'G',
        7 => 'H',
        8 => 'I',
        9 => 'J',
        10 => 'K',
        11 => 'L',
        12 => 'M',
        13 => 'N',
        14 => 'O',
        15 => 'P',
        16 => 'Q',
        17 => 'R',
        18 => 'S',
        19 => 'T',
        20 => 'U',
        21 => 'V',
        22 => 'W',
        23 => 'X',
        24 => 'Y',
        25 => 'Z',
    );
}
//返回0－25 与 A－Z的对应
function returnAZKey($val) {
    $data = array(
        0 => 'A',
        1 => 'B',
        2 => 'C',
        3 => 'D',
        4 => 'E',
        5 => 'F',
        6 => 'G',
        7 => 'H',
        8 => 'I',
        9 => 'J',
        10 => 'K',
        11 => 'L',
        12 => 'M',
        13 => 'N',
        14 => 'O',
        15 => 'P',
        16 => 'Q',
        17 => 'R',
        18 => 'S',
        19 => 'T',
        20 => 'U',
        21 => 'V',
        22 => 'W',
        23 => 'X',
        24 => 'Y',
        25 => 'Z',
    );
    foreach ($data as $k => $v) {
        if ($v == $val) {
            return $k;
        }
    }
}
function url_to_array_1($url) {  //用&来拆分
    $new_array = array();
    $array_1 = explode('&', $url);
    if (count($array_1) > 1) { //价格在一个区间
        foreach ($array_1 as $k => $v) {
            $data = url_to_array_2($v);
            $new_array[$data[0]] = $data[1];
        }
    } else {//价格只有最小值得比如   800以上
        $data = url_to_array_2($url);
        $new_array[$data[0]] = $data[1];
    }
    return $new_array;
}
function url_to_array_2($url) {//用＝来拆分
    $array_1 = explode('=', $url);
    if (count($array_1) > 1) {
        return $array_1;
    } else {
        return array(0 => $url);
    }
}
function urlparam_to_string($uri_array) {  //由url来生成 价格原有的参数 值得
    $string = '';
    if (isset($uri_array['sprice']) && !empty($uri_array['sprice'])) {
        $string .= 'sprice=' . $uri_array['sprice'];
    }
    if (isset($uri_array['eprice']) && !empty($uri_array['eprice'])) {
        $string .= '&eprice=' . $uri_array['eprice'];
    }
    return $string;
}

//给字符串加颜色
//	function create_color($string){
//		$arr = explode('^', $string);
//		for ($i=1;$i<count($arr);$i=$i+2){
//			if (isset($arr[$i]))$arr[$i] = "<font color='red'>".$arr[$i]."</font>";
//		}
//		$string = implode("", $arr);
//		return $string;
//	}
//利用正则给字符串加颜色
function create_color($subject) {
    $patterns = '/\^(.*)\^/U';
    $replacement = "<font color='red'>$1</font>";
    $return = preg_replace($patterns, $replacement, $subject);
    //echo '######'.$return.'#####';
    return $return;
}
//去除^^
function delete_ctrl($subject) {
    $patterns = $patterns = '/\^(.*)\^/U';
    $replacement = "$1";
    $return = preg_replace($patterns, $replacement, $subject);
    return $return;
}
//截取UTF-8的中文字符串
function utf8Substr($str, $from, $len) {
    $str = getUtf8($str);
    return preg_replace('#^(?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,' . $from . '}' .
            '((?:[\x00-\x7F]|[\xC0-\xFF][\x80-\xBF]+){0,' . $len . '}).*#s', '$1', $str);
}
//分页
function page($count, $per_page, $uri, $dir = '/user/') {
    $page_inc = 2;
    if (isset($uri['pageindex']))
        $page_inc = 1;
    $ci = & get_instance();
    $other_arr = array("pageindex" => '');
    $array = array_merge($uri, $other_arr);
    $url = $ci->uri->assoc_to_uri($array);
    $url = $dir . $url;

    $ci->load->library('pagination');
    $config['base_url'] = site_url($url);
    $config['total_rows'] = $count; //总数
    $config['per_page'] = $per_page; //每页显示
    $config['uri_segment'] = count($uri) * 2 + $page_inc; //分页显示段位
    $config['first_link'] = "首页";
    $config['last_link'] = "尾页";
    return $ci->pagination->initialize($config);
}
/**
 * 过滤json特殊字符
 */
function delHtml($str) {
    //(\r表示回车，\n表示换行，\t表示tab)
    //$str	=	str_replace("\\",'\\\\',$str);
    //$str	=	str_replace("\'","\\\'",$str);
    //$str	=	str_replace("\"","\\\"",$str);
    $str = str_replace("\t", '', $str);
    $str = str_replace("\\n", '^', $str);
    $str = str_replace("\\r", '^', $str);
    $re = str_replace("\r\n", '', $str);
    //$re		=	preg_replace("'([\r\n])[\s]+'",'', $str);
    return $re;
}
/**
 * 过滤特殊关键字
 * 作者：吴天堂
 * date：2012-11-16
 */
function script_filter($str) {
    //$is_have 是否有特殊字符,1有，0没有
    $is_have = 0;
    if (!empty($str)) {
        $str = urldecode($str);
        // $filters = array("<",">","select","update","delete"," from","where","script","mouseover","alert","onclick","ondbclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onkeypress","onkeydown","onkeyup"," and "," or ","%0d%0a","%0d%0a","%0a%20","\n");
        $filters = array('javascript', 'vbscript', 'expression', 'applet', 'meta', 'blink', 'script', 'embed', 'object', 'iframe', 'frame', 'frameset', 'ilayer', 'layer', 'bgsound', 'base', 'onabort', 'onactivate', 'onafterprint', 'onafterupdate', 'onbeforeactivate', 'onbeforecopy', 'onbeforecut', 'onbeforedeactivate', 'onbeforeeditfocus', 'onbeforepaste', 'onbeforeprint', 'onbeforeunload', 'onbeforeupdate', 'onblur', 'onbounce', 'oncellchange', 'onchange', 'onclick', 'oncontextmenu', 'oncontrolselect', 'oncopy', 'oncut', 'ondataavailable', 'ondatasetchanged', 'ondatasetcomplete', 'ondblclick', 'ondeactivate', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onerror', 'onerrorupdate', 'onfilterchange', 'onfinish', 'onfocus', 'onfocusin', 'onfocusout', 'onhelp', 'onkeydown', 'onkeypress', 'onkeyup', 'onlayoutcomplete', 'onload', 'onlosecapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onmove', 'onmoveend', 'onmovestart', 'onpaste', 'onpropertychange', 'onreadystatechange', 'onreset', 'onresize', 'onresizeend', 'onresizestart', 'onrowenter', 'onrowexit', 'onrowsdelete', 'onrowsinserted', 'onscroll', 'onselect', 'onselectionchange', 'onselectstart', 'onstart', 'onstop', 'onsubmit', 'onunload', 'alert', '<', '>', 'select', 'update', 'delete', ' from', 'where', ' and ', ' or ', '%0d%0a', '%0d%0a', '%0a%20', '\'', '"', '>', '<');
        foreach ($filters as $values) {
            if (strpos($str, $values) !== false) {
                $is_have = 1;
                break;
            }
        }
    }
    return $is_have;
}
//密钥加密算法
function sign($src) {
    // 导入商户私钥文件
    $fp = fopen(substr(dirname(__FILE__), 0, -20) . '/unionkey/lefengwap.p12', "r");
    $priv_key = fread($fp, 8192);
    fclose($fp);
    $data = $src; //需要签名的模式串
    $out = array();
    openssl_pkcs12_read($priv_key, $out, '1235435675456781298811');
    $signature = "";
    $r = openssl_sign($data, $signature, $out['pkey']);
    if (!$r) {
        echo openssl_error_string();
        exit;
    }
    $len = strlen($signature);
    $str = $signature;
    $result = "";
    $hexArray = '0123456789abcdef';
    for ($i = 0; $i < $len; $i++) {
        if (ord($str[$i]) >= 128) {
            $byte = ord($str[$i]) - 256;
        } else {
            $byte = ord($str[$i]);
        }
        $bytes[] = $byte;
        $byte = $byte & 0xff;
        $result .= $hexArray[$byte >> 4];
        $result .= $hexArray[$byte & 0xf];
    }
    return $result;
}
function setUniqid() {

    $str = str_replace('.', '', uniqid('', true));
    return $str;
}
function checkBOM($filename) {
    global $auto;
    $contents = file_get_contents($filename);
    $charset[1] = substr($contents, 0, 1);
    $charset[2] = substr($contents, 1, 1);
    $charset[3] = substr($contents, 2, 1);
    if (ord($charset[1]) == 239 && ord($charset[2]) == 187 && ord($charset[3]) == 191) {
        if ($auto == 1) {
            $rest = substr($contents, 3);
            rewrite($filename, $rest);
            //return "<font color=red>BOM found, automatically removed.</font>";
        } else {
            echo $filename . "<font color=red>BOM found.</font><br/>";
        }
    }
    //else return ("BOM Not Found.");
}
/*
 * author:heaven
 * date:2013-04-26
 * email:wutiantang@lafaso.com
 * content:检查bom
 */
function checkdir($basedir) {
    if ($dh = opendir($basedir)) {
        while (($file = readdir($dh)) !== false) {
            if ($file != '.' && $file != '..') {
                if (!is_dir($basedir . "/" . $file)) {
                    //echo "filename: $basedir/$file ".checkBOM("$basedir/$file")." <br>";
                    checkBOM("$basedir/$file");
                } else {
                    $dirname = $basedir . "/" . $file;
                    checkdir($dirname);
                }
            }
        }//end while
        closedir($dh);
    }//end if($dh
}
//end function
function rewrite($filename, $data) {
    $filenum = fopen($filename, "w");
    flock($filenum, LOCK_EX);
    fwrite($filenum, $data);
    fclose($filenum);
}
//end function
/**
 *
 * content:购物车cookie解密
 * author: heaven
 * date:2013-05-15
 */
function decodeCartId($cartId) {
    if (!$cartId) {
        return false;
    } else {
        // if(!is_numeric($cartId)){
        $decodeId = base64_decode(base64_decode($cartId));
        $cartSessFId = substr($decodeId, 5);
        $cartSessEId = substr($cartSessFId, 0, -5);
        return $cartSessEId;
        // }else{
        // 	return $cartId;
        // }
    }
}
/**
 * content:android&ios解密方式
 * author: awen
 */
function decodeCcode($str = '') {
    return _decodeCcode(_decodeCcode($str));
}
function _decodeCcode($str = '') {
    if (!$str) {
        return false;
    } else {
        $ret = base64_decode($str);
        $ret = substr($ret, 5);
        $ret = substr($ret, 0, -5);
        return $ret;
    }
}
function replace_str($content) {
    $str = str_replace("^", "<br/>", $content);
    return $str;
}
// add by hzj @ 2014-08-14 微信分享优惠券
// urlencode,base64_encode,md5,混淆加密函数
function encodeXubm($txt,$key='lefeng'){
	$txt = $txt.$key;
    $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
    $nh = rand(0,64);
    $ch = $chars[$nh];
    $mdKey = md5($key.$ch);
    $mdKey = substr($mdKey,$nh%8, $nh%8+7);
    $txt = base64_encode($txt);
    $tmp = '';
    $i=0;$j=0;$k = 0;
    for ($i=0; $i<strlen($txt); $i++) {
        $k = $k == strlen($mdKey) ? 0 : $k;
        $j = ($nh+strpos($chars,$txt[$i])+ord($mdKey[$k++]))%64;
        $tmp .= $chars[$j];
    }
    return urlencode(base64_encode($ch.$tmp));
}
//urlencode,base64_encode,md5,混淆解密函数
function decodeXubm($txt,$key='lefeng'){
	$txt = base64_decode(urldecode($txt));
    $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
    $ch = $txt[0];
    $nh = strpos($chars,$ch);
    $mdKey = md5($key.$ch);
    $mdKey = substr($mdKey,$nh%8, $nh%8+7);
    $txt = substr($txt,1);
    $tmp = '';
    $i=0;$j=0; $k = 0;
    for ($i=0; $i<strlen($txt); $i++) {
        $k = $k == strlen($mdKey) ? 0 : $k;
        $j = strpos($chars,$txt[$i])-$nh - ord($mdKey[$k++]);
        while ($j<0) $j+=64;
        $tmp .= $chars[$j];
    }
    return trim(base64_decode($tmp),$key);
}

// function mkdirs($dir, $mode = 0777) {
//     if (!is_dir($dir)) {
//         mkdirs(dirname($dir));
//         if (mkdir($dir),$mode) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return true;
//     }
// }
//
function mkdirs($dir, $mode = 0777) {
    if (!is_dir($dir)) {
        mkdirs(dirname($dir));
        if (mkdir($dir)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function get_client_ip($type = 0) {
    $type       =  $type ? 1 : 0;
    static $ip  =   NULL;
    if ($ip !== NULL) return $ip[$type];
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        $pos    =   array_search('unknown',$arr);
        if(false !== $pos) unset($arr[$pos]);
        $ip     =   trim($arr[0]);
    }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ip     =   $_SERVER['HTTP_CLIENT_IP'];
    }elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ip     =   $_SERVER['REMOTE_ADDR'];
    }
    // IP地址合法验证
    $long = sprintf("%u",ip2long($ip));
    $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
    return $ip[$type];
}
/**
 * add by sunlc 2016年6月17日
 * [signMd5 md5 字典顺序加密]
 * @param  [type] $key  [description]
 * @param  array  $data [description]
 * @return [type]       [description]
 */
function signMd5($keyp,$data = array()){
    //"g56ef@4f%df$%hyU*"
        // 第一步：把字典按Key的字母顺序排序
        ksort($data);
        $str = '';
        // 第二步：把所有参数名和参数值串在一起
        foreach($data as $key => $value){
            $str .= $key.'='.$value.'&';
            //echo $key.'-';
        }
        // $str = mb_substr($str,0,-1,'utf-8');
        $str .= 'key='.$keyp;
        // 第三步：使用MD5加密
        $sign = md5($str);
        return strtoupper($sign);
}

?>
