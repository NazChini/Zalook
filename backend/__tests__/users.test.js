const app = require('../src/app')
const request = require('supertest')

describe('Users endpoints', () => {
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      name: 'name' + Date.now(),
      // lastName: 'lastName' + Date.now(),
      email: 'email' + Date.now(),
      password: 'password' + Date.now(),
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    // expect(createdUser.lastName).toBe(userToCreate.lastName)
    expect(createdUser.email).toBe(userToCreate.email)
    expect(createdUser.password).toBe(userToCreate.password)
  })

  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const usersExist = userList.length > 0

    expect(usersExist).toBe(true)
  })
})
