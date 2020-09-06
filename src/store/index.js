import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    todos: [
      { id: 1, text: '1done things', done: true },
      { id: 2, text: '2undo things', done: false },
      { id: 3, text: '3done things', done: true }
    ],
    mutationType: 'no init'
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // 第二个参数 getters
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // 通过方法传参
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementN(state, n) {
      state.count += n
    },
    incrementObj(state, payload) {
      state.count += payload.amount
    },
    [SOME_MUTATION](state) {
      state.mutationType = SOME_MUTATION
    }
  },
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    /* increment(context) {
      context.commit('increment')
    }, */
    increment({ commit }) {
      commit('increment')
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA({ state, commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('SOME_MUTATION')
          resolve(state.todos)
        }, 1000)
      })
    },
    actionB({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('SOME_MUTATION')
      })
    },
    // 结合async await
    async actionAa({ commit }) {
      commit('gotData', await getData())
    },
    async actionBb({ dispatch, commit }) {
      await dispatch('actionAa') // 等待 actionAa 完成
      commit('gotOtherData', await getOtherData())
    }
  }
})

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('state.todos')
    }, 1000)
  })
}

function getOtherData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('state.todos')
    }, 1000)
  })
}

export default store
