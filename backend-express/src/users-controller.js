const {
  getUsers,
  addUser,
  findUserById,
  updateUserById,
  deleteUser,
} = require('./data/users')

const userController = {
  store: (req, res) => {
    try {
      const { id, name, address, age } = req.body
      addUser({ id, name, address, age })
      res.status(201).json({ ok: true, message: 'success' })
    } catch (e) {
      res.status(500).json({ ok: false, error: e })
    }
  },
  getAll: (req, res) => {
    res.status(200).json({ ok: true, users: getUsers() })
  },
  getById: (req, res) => {
    const user = findUserById(req.params.id)
    res.status(200).json({ ok: true, user })
  },
  update: (req, res) => {
    const { id } = req.params
    const { name, address, age } = req.body

    const userData = updateUserById({ id, name, address, age })

    res.status(201).json({ ok: true, message: 'success', user: userData })
  },
  delete: (req, res) => {
    const { id } = req.params

    const userData = deleteUser(id)

    res.status(201).json({ ok: true, users: userData })
  },
}

module.exports = userController
