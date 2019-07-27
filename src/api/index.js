import ajax from "./ajax";

/* 本地 */
export const reqHomedata = ()=> ajax('/homeData')

export const reqClassflydata = () => ajax('/calssflyData')

export const reqclassflyListData = () => ajax('/classflyListData')

/* 网络接口 */
export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')//things的导航数据
export const reqThingsData = () => ajax('/api/topic/v1/find/recManual.json')//things的数据

export const reqCode = (phone) => ajax( '/local/sendcode', {phone})//获取手机验证码
export const reqLoginPhone = (phone,code) => ajax( '/local/login_sms', {phone,code}, 'POST')//手机登陆
export const reqLoginEmail = (email,pwd) => ajax( '/local/login_email', {email,pwd}, 'POST')// 邮箱登陆
export const reqUserInfo = () => ajax( '/local/userinfo')// 请求用户
export const reqLogout = () => ajax( '/local/logout')// 退出登录

export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')//搜索的初始化显示数据
export const reqThingsSearch = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837',{keywordPrefix})// 搜索内容


