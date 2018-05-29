
/**api链接 */
//开发
const apiUrl = "http://wxapp.c88s.com/";
//线上
// const apiUrl = "https://mob.apppin.com/";
//
module.exports = {
  domainSrc:apiUrl,
  userLogin: apiUrl + 'welcome/login', //用户注册登录
  userInfo: apiUrl + 'welcome/index', //用户信息
}