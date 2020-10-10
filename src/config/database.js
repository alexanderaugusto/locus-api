require('dotenv').config()

const dbConfig = {
  development: {
    username: "root",
    password: "root",
    database: "imovel",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    timezoze: "-03:00"
  },
  test: {
    storage: "./__tests__/database.sqlite",
    dialect: "sqlite",
    logging: false
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: "postgres",
    timezoze: "-03:00"
  }
}

module.exports = {
  ...dbConfig[process.env.NODE_ENV || "development"],
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: true
  }
}

