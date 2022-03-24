import axios from 'axios';

const state = {
    categories : []
}

const getters = {
    categories: state => state.categories,
};

const actions = {

    async getCategories({ commit }){
        axios({
            method: 'get', //you can set what request you want to be
            url: 'http://localhost:3000/category',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            }
          }).then((response) => { 
            const categories = response.data ; 
            
            commit('getCategory', categories)            

          }).catch(function(error) {
            console.log(error);
          })

    }
};

const mutations = {
    getCategory: (state, categories) => (state.categories = categories),
}

export default {
    state,
    getters,
    actions,
    mutations
}