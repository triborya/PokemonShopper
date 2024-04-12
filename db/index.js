const { Client } = require("pg");

const dotenv = require("dotenv");
dotenv.config();

const { DATABASE_URL = "postgres://localhost:5432/pokemon-shopper" } =
  process.env;

// const client = new Client({
//   connectionString: DATABASE_URL,
//   ssl:
//     process.env.NODE_ENV === "production"
//       ? { rejectUnauthorized: false }
//       : undefined,
// });

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "pokemon-shopper",
  user: "postgres",
  password: "QwEasDzxc123",
});

module.exports = client;
