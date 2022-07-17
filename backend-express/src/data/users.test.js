const { addUser, getUsers, findUserById } = require('./users')
const { buildUser } = require('../__fixtures__/users')

test('should add a new user', () => {
  let user = buildUser()
  addUser(user)
  expect(getUsers()).toEqual([user])
})

test('should return empty array when there are not user', () => {
  const user = findUserById('')
  expect(user).toBe(undefined)
})

test('should return a valid user', () => {
  const user = buildUser()
  const userFound = findUserById(user.id)
  expect(userFound).toEqual(user)
})
