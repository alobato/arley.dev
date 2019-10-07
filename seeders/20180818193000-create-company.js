module.exports = {
  up: async (queryInterface, _) => {
    return queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'ACME',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, _) => {
    // return queryInterface.bulkDelete('Companies', null, {})
  }
}
