---
to: migrations/<%= `${(new Date()).toISOString().replace(/\D/g, '').slice(0, 14)}-create-${h.inflection.singularize(name)}` %>.js
---
const modelType = require('../types/<%= h.inflection.singularize(name) %>')

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('<%= h.inflection.camelize(h.inflection.pluralize(name)) %>', modelType(DataTypes))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('<%= h.inflection.camelize(h.inflection.pluralize(name)) %>')
  }
}
