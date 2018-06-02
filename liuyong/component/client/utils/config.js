
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
  login_v2: apiUrl + 'welcome/login_v2', //用户注册登录
  userInfo_v2: apiUrl + 'welcome/index_v2', //用户信息
}