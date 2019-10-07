module.exports = Sequelize => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    gender: Sequelize.STRING,
    age: Sequelize.INTEGER,
    CompanyId: {
      type: Sequelize.INTEGER,
      references: { model: 'Companies', key: 'id' },
    },
    deletedAt: Sequelize.DATE,
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },
  }
}
