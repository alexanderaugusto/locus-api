const request = require('supertest')
const app = require('../../src/app')
const factory = require('../factories')
const truncate = require('../utils/truncate')
const { generateJwt } = require('../../src/utils/auth')

describe("Property test", () => {
  beforeEach(async () => {
    await truncate()
  })

  it("Should create a property to user without images using api route", async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .post("/user/property")
      .send({
        title: "Casa da Prata",
        description: "Esta casa possui vista para o mar e é muito bonita",
        street: "Av. João de Camargo",
        city: "Santa Rita do Sapucaí",
        state: "MG",
        country: "Brasil",
        price: 1450.00,
        bedrooms: 3,
        bathrooms: 1,
        area: 40,
        place: 3,
        animal: true,
        type: "Casa"
      })
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(200)
    expect(response.body.user_id).toBe(user.id)
  })

  it("Should list user properties using api route", async () => {
    const user = await factory.create('User')
    await factory.create('Property', {
      user_id: user.id
    })
    await factory.create('Property', {
      user_id: user.id
    })

    const response = await request(app)
      .get("/user/" + user.id + "/properties")
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(2)
  })
  
  it("Should update a user property using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property', {
      user_id: user.id
    })

    const response = await request(app)
      .put("/user/property/" + property.id)
      .send({
        area: 40,
        price: 1200.00
      })
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })

  it("Should delete a user property using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property', {
      user_id: user.id
    })

    const response = await request(app)
      .delete("/user/property/" + property.id)
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })

  it("Should list all properties using api route", async () => {
    await factory.create('Property')
    await factory.create('Property')

    const response = await request(app)
      .get("/properties")

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(2)
  })
})