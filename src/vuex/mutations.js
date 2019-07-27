import {RECEIVE_HOMEDATA,RECEIVE_CLASSFLY,RECEIVE_LISTDATA,RECEIVE_THINGSNAV,RECEIVE_THINGSDATA,RECEIVE_USER,LOGOUT,RECEIVE_SEARCHINITIAL} from './mutation-types'
export default {
  [RECEIVE_HOMEDATA] (state,homeData) {
    state.homeData = homeData
  },
  [RECEIVE_CLASSFLY] (state,classflyData) {
    state.classflyData = classflyData
  },
  [RECEIVE_LISTDATA] (state,classflyListData) {
    state.classflyListData = classflyListData
  },


  [RECEIVE_THINGSNAV] (state,thingsNav) {
    state.thingsNav = thingsNav
  },
  [RECEIVE_THINGSDATA] (state,thingsData) {
    state.thingsData = thingsData
  },

  [RECEIVE_SEARCHINITIAL] (state,data) {
    state.searchInitialData = data
  },

  [RECEIVE_USER] (state, data) {
    state.userInfo = data
  },
  [LOGOUT] (state) {
    state.userInfo = ''
  }
}
