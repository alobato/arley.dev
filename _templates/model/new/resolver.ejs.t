---
to: resolvers/<%= h.inflection.singularize(name) %>.js
---
const { combineResolvers } = require('graphql-resolvers')
const { isAuthenticated, isAdmin } = require('./authorization')

module.exports = {
  Query: {
    <%= h.inflection.pluralize(name) %>: combineResolvers(
      isAuthenticated,
      async (parent, args, { models }) => {
        return await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findAll()
      }
    ),
    <%= h.inflection.singularize(name) %>: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models, me }) => {
        return await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findByPk(id)
      }
    ),
  },

  Mutation: {
    create<%= h.inflection.camelize(h.inflection.singularize(name)) %>: combineResolvers(
      isAuthenticated,
      async (parent, args, { models, me }) => {
        return await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.create(args)
      }
    ),
    update<%= h.inflection.camelize(h.inflection.singularize(name)) %>: combineResolvers(
      isAuthenticated,
      async (parent, args, { models, me }) => {
        const item = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findByPk(args.id)
        return await item.update(args)
      }
    ),
    delete<%= h.inflection.camelize(h.inflection.singularize(name)) %>: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models }) => {
        return await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.destroy({where: { id }})
      }
    )
  }

}
