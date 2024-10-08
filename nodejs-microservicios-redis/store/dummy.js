const db = {
  user: [
    { id: '1', name: 'Carlos', username: 'calrlitos' },
    { id: '2', name: 'Juan', username: 'juanito' },
    {
      name: 'Alexander',
      username: 'ablanco',
      id: 'EWr8X4I03OSYc_e47pAp0'
    }
  ],
  auth: [
    {
      id: 'EWr8X4I03OSYc_e47pAp0',
      username: 'ablanco',
      password: '$2b$05$b4uZ/xGZA5/KpToHEJw9R.KG1MqLNtB5Y3YXTV8LpCwKprQWp.edK'
    }
  ]
}

async function list(tabla) {
  return db[tabla] || []
}

async function get(tabla, id) {
  const col = await list(tabla)
  return col.filter((item) => item.id === id)[0]
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = []
  }
  db[tabla].push(data)
  return await list(tabla)
}

async function query(tabla, q) {
  const col = await list(tabla)
  const keys = Object.keys(q)
  const key = keys[0]
  return col.filter((item) => item[key] === q[key])[0] || null
}

async function remove(tabla, id) {
  return true
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query
}
