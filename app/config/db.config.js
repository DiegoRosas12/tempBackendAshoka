module.exports = {
    HOST: "localhost",
    USER: "admin",
    PASSWORD: "12345",
    DB: "ashoka",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };