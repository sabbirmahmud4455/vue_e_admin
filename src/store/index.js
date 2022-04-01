import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './modules/auth'
import User from './modules/user';
import Category from './modules/category';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        User,
        Category
    }
})