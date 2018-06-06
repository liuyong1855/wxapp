
/**api链接 */
//开发
const apiUrl = "http://wxapp.c88s.com/";
//线上
// const apiUrl = "https://mob.apppin.com/";
//
module.exports = {
  domainSrc:apiUrl,
  departmentList: apiUrl + 'wxapp/departmentList', //找药买药
  getCityList: apiUrl + 'wxapp/getCityList', //城市列表
  searchClass: apiUrl + 'wxapp/searchClass', //分类
  searchResult: apiUrl + 'wxapp/searchResult', //搜索结果
  cartInfo: apiUrl + 'wxapp/cartInfo', //购物车
  userInfo: apiUrl + 'wxapp/userInfo', //个人中心
  cityList: apiUrl + 'wxapp/cityList', //省市区数据
  srarhHot: apiUrl + 'wxapp/srarhHot', //热门搜索
  searchHint: apiUrl + 'wxapp/searchHint', //关键字联想
}