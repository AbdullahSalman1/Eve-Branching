const path = require('path');
const dotenv = require('dotenv');

const allowedEnvs = ['staging', 'preprod', 'prod'];
const env = process.env.NODE_ENV || 'staging';

if (!allowedEnvs.includes(env)) {
  throw new Error(`Unknown NODE_ENV "${env}". Use one of: ${allowedEnvs.join(', ')}`);
}

// Load the matching file, e.g. .env.staging
dotenv.config({ path: path.resolve(__dirname, `../../.env.${env}`) });

module.exports = {
  env,
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
};