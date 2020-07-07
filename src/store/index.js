import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from './commonStore'
import rankManager from './rankManager'
import departmentManager from './departmentManager'
import staffManager from './staffManager'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    commonStore,
    rankManager,
    departmentManager,
    staffManager,
  }
})
