require('dotenv').config()

const dbConfig = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOSTNAME,
    port: process.env.DEV_DB_PORT,
    dialect: process.env.DEV_DB_TYPE,
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
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
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

