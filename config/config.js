module.exports = {
  development: {
    database: 'aula12_development',
    username: 'root',
    password: null,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    database: 'aula12_production',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    host: '127.0.0.1',
    dialect: 'mysql',
  }
}
