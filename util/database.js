var { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "remote", "Zx703475.", {
  dialect: "mysql",
  host: "firapp.fun",
  define: {
    freezeTableName: true,
  },
});

module.exports = sequelize;

/**
 * This is for mysql2 use;
 */
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "firapp.fun",
//   user: "remote",
//   database: "test",
//   password: "Zx703475.",
// });

// module.exports = pool.promise();

// The corresponding import:

// const db = require("./util/database");
