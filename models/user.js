// const bcrypt = require('bcryptjs')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', require('../types/user')(Sequelize), { paranoid: true })

  // Model.beforeCreate(async user => {
  //   const password = user.password
  //   const saltRounds = 10
  //   user.password = await bcrypt.hash(password, saltRounds)
  // })

  User.associate = models => {
    User.belongsTo(models.Company, { foreignKey: { allowNull: false } })
  }

  return User
}
