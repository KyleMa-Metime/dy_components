import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import modules from './modules'

Vue.use(Vuex)


const state = {
    hello: 'hello world',
    nums: 0,
    obj: {
        name: 'zhangsan',
        age: 18
    },
    arr: ['a', 'b', 'c']
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {}

})

export default store