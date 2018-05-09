
/**api链接 */
//开发
const apiUrl = "http://wxapp.c88s.com/";
//线上
// const apiUrl = "https://mob.apppin.com/";
//
module.exports = {
  domainSrc:apiUrl,
  departmentList: apiUrl + 'wxapp/departmentList', //找药买药
  getCityList: apiUrl + 'wxapp/getCityList', //用户信息
}