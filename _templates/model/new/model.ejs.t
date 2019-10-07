---
to: models/<%= h.inflection.singularize(name) %>.js
---
const modelType = require('../types/<%= h.inflection.singularize(name) %>')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('<%= h.inflection.camelize(name) %>', modelType(DataTypes), {paranoid: true})

  return Model
}
