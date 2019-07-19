// import MSite from '../pages/MSite/MSite.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Shop from '../pages/Shop/Shop.vue'
// import Things from '../pages/Things/Things.vue'
import Classify from '../pages/Classify/Classify.vue'

import Find from '../pages/Find/Find.vue'
import Zhenjia from '../pages/Zhenjia/Zhenjia.vue'


export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }

  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    }

  },
  {
    path:'/things/find',
    component: Find,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/things/zhenjia',
    component: Zhenjia,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/things',
    meta: {
      isShowFooter: true
    },
    redirect: '/things/find'
  },

  {
    path: '/shop',
    component: Shop,
    meta: {
      isShowFooter: true
    }

  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },

  {
    path: '/', // 项目根路径
    redirect: '/home'
  }
]
