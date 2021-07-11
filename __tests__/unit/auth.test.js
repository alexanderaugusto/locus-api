const request = require('supertest')
const app = require('../../src/app')
const factory = require('../factories')
const truncate = require('../utils/truncate')
const { generateJwt } = require('../../src/utils/auth')

describe("Auth test", () => {
  beforeEach(async () => {
    await truncate()
  })

  it("Should do a login", async () => {
    const user = await factory.create('User', {
      password: '123'
    })

    const response = await request(app)
      .post("/auth/login")
      .send({
        email: user.email,
        password: '123'
      })

    expect(response.status).toBe(200)
  })

  it("Should Renew Token", async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .put("/auth/renew")
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(200)
  })
})