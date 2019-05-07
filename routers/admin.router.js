const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const Post = require('../models/post.model')

const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [{
    resource: Post,
    options: {
      properties: {
        post: {
          type: 'defaultType',
        },
      },
    },
  }],
  
  rootPath: '/admin',
  branding: {
    logo: 'https://www.technomin.com/wp-content/uploads/2018/09/technominlogo2-300x91.png',
    companyName: 'Technomin',
  }
})

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@admin.com',
  password: process.env.ADMIN_PASSWORD || 'admin',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN
    }
    return null
  }
})

module.exports = router
