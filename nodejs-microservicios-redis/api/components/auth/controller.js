const auth = require('../../auth')
const TABLA = 'auth'

module.exports = function (injectedStore) {
  const store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  async function login(username, password) {
    const data = await store.query(TABLA, {
      username: username
    })
    console.log(data)
    if (data.password === password) {
      // Generate token
      return auth.sign(data)
    } else {
      throw new Error('Información inválida')
    }
  }

  function upsert(data) {
    const authData = {
      id: data.id
    }

    if (data.username) {
      authData.username = data.username
    }

    if (data.password) {
      authData.password = data.password
    }

    return store.upsert(TABLA, authData)
  }
  return {
    upsert,
    login
  }
}
