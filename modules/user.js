const state = {
  info: null
}

const mutations = {
  SET_INFO: (state, data) => {
    state.data = data
  }
}

const actions = {
  getInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      getInfo(data).then(response => {
        commit('SET_INFO', response.data.info)
        resolve(response)
      }
    }).catch(error => {
      console.debug(error)
      reject(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
