const request = require('supertest')
const app = require('../../src/app')
const factory = require('../factories')
const truncate = require('../utils/truncate')
const { generateJwt } = require('../../src/utils/auth')

describe("User test", () => {
  beforeEach(async () => {
    await truncate()
  })

  it("Should add rental property to user using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property')

    const response = await request(app)
      .put("/user/rental/" + property.id)
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })

  it("Should list user rentals using api route", async () => {
    const user = await factory.create('User')
    await factory.create('Rental', {
      user_id: user.id
    })
    await factory.create('Rental', {
      user_id: user.id
    })

    const response = await request(app)
      .get("/user/rentals")
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(2)
  })

  it("Should remove rental property from user using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property')
    await factory.create('Rental', {
      user_id: user.id,
      property_id: property.id
    })

    const response = await request(app)
      .delete("/user/rental/" + property.id)
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })
})