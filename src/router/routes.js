// import MSite from '../pages/MSite/MSite.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import Shop from '../pages/Shop/Shop.vue'
import Search from '../pages/Search/Search.vue'
import Classify from '../pages/Classify/Classify.vue'
import Things from '../pages/Things/Things.vue'
import Find from '../pages/Find/Find.vue'
import Zhenjia from '../pages/Zhenjia/Zhenjia.vue'
import Login from '../pages/Login/Login.vue'

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
    path:'/search',
    component:Search
  },
  {
    path: '/things',
    component: Things,
    meta: {
      isShowFooter: true,
    },
    redirect: '/things/find',
    children: [
      {
        path: '/things/find',
        component: Find,
        meta: {
          isShowFooter: true,
        }
      },
      {
        path: '/things/zhenjia',
        component: Zhenjia,
        meta: {
          isShowFooter: true,
        }
      }
    ]
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
      isShowFooter: false
    }
  },
  {
    path: '/login',
    component: Login,

  },

  {
    path: '/', // 项目根路径
    redirect: '/home'
  }
]
