const PROJECT_NAME = 'arley.dev'
const USER = 'deployer'
const HOST = '174.138.40.160'
const REPO = `git@github.com:alobato/${PROJECT_NAME}.git`
const NODE_VERSION = '12.6.0'

// const SECRET = process.env.PRODUCTION_SECRET
const DATABASE_PASSWORD = process.env.PRODUCTION_DATABASE_PASSWORD

module.exports = {
  apps : [{
    name: PROJECT_NAME,
    script: 'app.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      DATABASE_PASSWORD
    }
  }],

  deploy: {
    production: {
      user: USER,
      host: HOST,
      ref: 'origin/master',
      repo: REPO,
      path: `/home/${USER}/apps/${PROJECT_NAME}`,
      'post-deploy' : `/home/${USER}/.nvm/versions/node/v${NODE_VERSION}/bin/npm install && /home/${USER}/.nvm/versions/node/v${NODE_VERSION}/bin/pm2 reload ecosystem.config.js --env production`
    }
  }
}
