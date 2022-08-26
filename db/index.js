const Sequelize = require("sequelize");

const db = new Sequelize(
  "d6qsknirk19qn1",
  "ezncgrjqixoxqx",
  "02630a0db4e4405238888ced0173c4624c60c88293266474741dee1c85bf1b24",
  {
    host: "ec2-44-209-186-51.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
  }
);

module.exports = db;
