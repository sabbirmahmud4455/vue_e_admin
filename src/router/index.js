import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/user/UserList.vue'
import Login from '../views/Login.vue';

//category 
import Category from '../views/category/category_list.vue';





import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },


  //category
  {
    path: '/category',
    name: 'Category',
    component: Category,
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  store.dispatch('authCheck');

  const auth = store.getters.auth;
  
  if (to.name !== 'Login' && auth == false) {
    next({ name: 'Login' })
  } else if (to.name == 'Login' && auth == true) {
    next(router.back())
  } else {
    next()
  }
})



export default router
