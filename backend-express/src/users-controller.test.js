const request = require('supertest')
const app = require('./app')
const { buildUser } = require('./__fixtures__/users')

const { getUsers, addUser, updateUserById } = require('./data/users')

jest.mock('./data/users')

beforeEach(() => {
  getUsers.mockReset()
  addUser.mockReset()
  updateUserById.mockReset()
})

describe('user controller', () => {
  it('store a user', async () => {
    let user = buildUser()
    let data = {
      ok: true,
      message: 'success',
    }
    let result = await request(app)
      .post('/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '31')
      .expect(201)

    expect(result.body).toEqual(data)
  })

  it('should get all users', async () => {
    let user = buildUser()
    getUsers.mockReturnValue({ ok: true, user: [user] })

    let result = await request(app).get('/users').expect(200)

    expect(result.body.users).toEqual({
      ok: true,
      user: [user],
    })
  })

  it('should update a user', async () => {
    let user = buildUser()
    const data = {
      ok: true,
      message: 'success',
      user,
    }
    updateUserById.mockReturnValue(user)

    let result = await request(app)
      .put(`/users/${user.id}`)
      .send(user)
      .expect(201)
    expect(result.body).toEqual(data)
  })
})
