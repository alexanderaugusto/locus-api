const request = require('supertest')
const app = require('../../src/app')
const factory = require('../factories')
const truncate = require('../utils/truncate')
const { generateJwt } = require('../../src/utils/auth')

describe("Property test", () => {
  beforeEach(async () => {
    await truncate()
  })

  it("Should create a property without images using api route", async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .post("/property")
      .send({
        user_id: user.id,
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

  it("Should list a property using api route", async () => {
    const property = await factory.create('Property')

    const response = await request(app)
      .get("/property/" + property.id)

    expect(response.status).toBe(200)
    expect(response.body.id).toBe(property.id)
  })

  it("Should update a property using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property')

    const response = await request(app)
      .put("/property/" + property.id)
      .send({
        area: 40,
        price: 1200.00
      })
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })

  it("Should delete a property using api route", async () => {
    const user = await factory.create('User')
    const property = await factory.create('Property')

    const response = await request(app)
      .delete("/property/" + property.id)
      .set("Authorization", `Bearer ${generateJwt({ id: user.id })}`)

    expect(response.status).toBe(204)
  })
})