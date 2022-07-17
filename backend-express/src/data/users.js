const users = []

const getUsers = () => users

const addUser = ({ id, name, address, age }) => {
  users.push({ id, name, address, age })
}

const findUserById = (id) =>
  users.find((user) => String(user.id) === String(id))

const updateUserById = ({ id, name, address, age }) =>
  users.map((user) =>
    String(user.id) === String(id) ? { ...user, name, address, age } : user
  )

const deleteUser = (id) => users.filter((user) => String(user.id) !== id)

module.exports = {
  getUsers,
  addUser,
  findUserById,
  updateUserById,
  deleteUser,
}
