// config.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "neondb_owner",
  host: "ep-divine-sound-adzd6tbm-pooler.c-2.us-east-1.aws.neon.tech",
  database: "neondb",
  password: "npg_Y6BNcmWjy0Pr",
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
