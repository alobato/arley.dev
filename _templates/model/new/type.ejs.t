---
to: types/<%= h.inflection.singularize(name) %>.js
---
module.exports = DataTypes => {
  return {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE }
  }
}
