import { reqHomedata, reqClassflydata,reqclassflyListData,reqThingsNav,reqThingsData,reqUserInfo,reqLogout,reqSearchInitialData } from "../api";
import {RECEIVE_HOMEDATA,RECEIVE_CLASSFLY,RECEIVE_LISTDATA,RECEIVE_THINGSNAV,RECEIVE_THINGSDATA,RECEIVE_USER,LOGOUT,RECEIVE_SEARCHINITIAL} from './mutation-types'

export default {

  async getHomeData ({commit}){
    const result = await reqHomedata()
    if (result.code === 0) {
      commit(RECEIVE_HOMEDATA, result.data)
    }
  },

  async getClassflydata ({commit},cb){
    const result = await reqClassflydata()
    if (result.code === 0) {
      commit(RECEIVE_CLASSFLY, result.data)
      cb && cb()
    }
  },

  async getclassflyListData ({commit},cb){
    const result = await reqclassflyListData()
    if (result.code === 0) {
      commit(RECEIVE_LISTDATA, result.data)
      cb && cb()
    }
  },

  async getThingsNav ({commit},cb) {
    const result = await reqThingsNav()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSNAV,result.data)
      cb&&cb()
    }
  },
  async reqThingsData({commit}) {
    const result = await reqThingsData()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSDATA,result.data)
    }
  },

  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      commit(RECEIVE_USER,result.data.name || result.data.phone)
    }
  },
  async logout ({commit},callback) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(LOGOUT)
      callback()
    }
  },

  async getSearchInitialData ({commit}) {
    const result = await reqSearchInitialData()
    if (result.code*1 === 200) {
      commit(RECEIVE_SEARCHINITIAL,result.data)
    }
  }
}
