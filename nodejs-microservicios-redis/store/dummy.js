const db = {
  user: [
    { id: '1', name: 'Carlos' },
    { id: '2', name: 'Juan' }
  ]
}

async function list(tabla) {
  return db[tabla]
}

async function get(tabla, id) {
  const col = await list(tabla)
  return col.filter((item) => item.id === id)[0]
}

async function upsert(tabla, data) {
  db[tabla].push(data)
  return await list(tabla)
}

async function remove(tabla, id) {
  return true
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
