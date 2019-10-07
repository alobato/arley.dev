const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
// const sequelize = new Sequelize('aula2-development', 'root', null, { dialect: 'mysql' })

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

const User = require('./user')(sequelize, Sequelize)
const Company = require('./company')(sequelize, Sequelize)

module.exports = { User, Company }
