import axios from 'axios';
import router from '../../router/index';

const state = {
    auth : false,

    authUser : null,
}

const getters = {
    auth: state => state.auth,
    authUser: state => state.authUser

};

const actions = {
    async loginSubmit({ commit }, data) {
        await axios({
        method: 'post', //you can set what request you want to be
        url: 'http://localhost:3000/login',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
        }).then(() => { 
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith('user='))
                .split('=')[1];

                const authUser = cookieValue ? decodeURIComponent(cookieValue) : null

            commit('login', authUser)
            router.push("/")
        }).catch(function(error) {
            console.log(error);
        })
    },

    async logoutSubmit({ commit }){
        await axios({
            method: 'POST', //you can set what request you want to be
            url: 'http://localhost:3000/logout',
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            },
            
        }).then(() => {
            
            commit('logout')
            
            router.push("/login")

        }).catch(function(error) {
            // handle error
            console.log(error);
        })

    }, 

    authCheck ({commit}) {
        let cookieValue = document.cookie

        if (cookieValue) {
            cookieValue = cookieValue.split('; ')
            .find(row => row.startsWith('user='))
            .split('=')[1];
        }

        const authUser = cookieValue ? decodeURIComponent(cookieValue) : null

        commit('login', authUser)
    }
};

const mutations = {
    login: (state, authUser) => (state.auth = authUser != null ? true : false, state.authUser = JSON.parse(authUser, true) ),
    logout: (state) => (state.auth = false, state.authUser = null)
}

export default {
    state,
    getters,
    actions,
    mutations
}