const db = {
  user: [
    { id: 1, name: 'Carlos' },
    { id: 2, name: 'Juan' }
  ]
}

function list(tabla) {
  return db[tabla] || []
}

function get(tabla, id) {
  const col = list(tabla)
  return col.filter((item) => item.id === id)[0] || null
}

function upsert(tabla, data) {
  db[collectio].push(data)
}

function remove(tabla, id) {
  return true
}

module.exports = {
  list,
  get,
  upsert,
  remove
}
