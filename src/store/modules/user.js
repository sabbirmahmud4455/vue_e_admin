import axios from 'axios';

const state = {
    users : []
}

const getters = {
    users: state => state.users,
};

const actions = {

    async getUsers({ commit }){
        axios({
            method: 'get', //you can set what request you want to be
            url: 'user',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            }
          }).then((response) => { 
            const users = response.data ; 
            
            commit('getUser', users)            

          }).catch(function(error) {
            console.log(error);
          })

    }
};

const mutations = {
    getUser: (state, users) => (state.users = users),
}

export default {
    state,
    getters,
    actions,
    mutations
}