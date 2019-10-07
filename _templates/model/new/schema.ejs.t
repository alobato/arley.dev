---
to: schema/<%= h.inflection.singularize(name) %>.js
---
const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    <%= h.inflection.singularize(name) %>: <%= h.inflection.camelize(h.inflection.singularize(name)) %>
    <%= h.inflection.pluralize(name) %>: [<%= h.inflection.camelize(h.inflection.singularize(name)) %>!]
  }

  extend type Mutation {
    create<%= h.inflection.camelize(h.inflection.singularize(name)) %>(
      name: String!
    ): <%= h.inflection.camelize(h.inflection.singularize(name)) %>!

    update<%= h.inflection.camelize(h.inflection.singularize(name)) %>(
      name: String
    ): <%= h.inflection.camelize(h.inflection.singularize(name)) %>!

    delete<%= h.inflection.camelize(h.inflection.singularize(name)) %>(
      id: ID!
    ): Boolean!
  }

  type <%= h.inflection.camelize(h.inflection.singularize(name)) %> {
    id: ID!
    createdAt: Date
    name: String
  }
`
