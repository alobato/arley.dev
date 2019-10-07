module.exports = {
  up: async (queryInterface, _) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Admin',
          email: 'admin@admin.com',
          role: 'ADMIN',
          password:
            '$2a$10$bQ9DXOhVcL697kxv1ABDlu9w.OvzRZZsO8FNevPJTKoqtPzOmTWnK',
          CompanyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, _) => {
    // return queryInterface.bulkDelete('Users', null, {})
  }
}
