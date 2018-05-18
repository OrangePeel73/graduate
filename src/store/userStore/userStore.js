import axios from 'axios'
// import _ from 'lodash'
// axios.defaults.baseURL = process.env.API_HOST

export default {
  state: {
    users: [] // 2 用户
  },
  getters: {
    users: state => state.users // 1 用户
  },
  mutations: {
    //  2 用户
    alterUsers: (state, data) => {
      state.users = data
      console.log(state.users)
    }
  },
  actions: {
    // 2 获取用户
    getUsers: (context) => {
      axios.get('/api/user/list').then((res) => {
        console.log(res.data)
        context.commit('alterUsers', res.data)
      })
    },
    // 3 删除用户
    deleteServerUser: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/user/delete', form).then(function (result) {
          // 保存成功之后
          context.dispatch('getUsers')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },

    //  添加用户
    addServerUser: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/user/add', form).then(function (result) {
          // 保存成功之后
          context.dispatch('getUsers')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    // 禁用/激活用户
    //  添加用户
    AIServerUser: (context, form) => {
      console.log(form)
      return new Promise((resolve, reject) => {
        axios.post('/api/user/active', form).then(function (result) {
          // 保存成功之后
          context.dispatch('getUsers')
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    }

  }
}
