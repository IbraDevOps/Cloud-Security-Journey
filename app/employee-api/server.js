const express = require("express");
const helmet = require("helmet");
const { Pool } = require("pg");
const {
  SecretsManagerClient,
  GetSecretValueCommand
} = require("@aws-sdk/client-secrets-manager");

const app = express();
const PORT = process.env.PORT || 3000;

const REGION = "eu-north-1";
const DB_HOST =
  "cysentra-employee-db.cng0my6e2kjv.eu-north-1.rds.amazonaws.com";
const DB_PORT = 5432;
const DB_NAME = "postgres";

const SECRET_ARN = process.env.DB_SECRET_ARN;

app.use(helmet());
app.use(express.json());

let pool;

async function getDatabaseCredentials() {
  const client = new SecretsManagerClient({ region: REGION });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: SECRET_ARN
    })
  );

  return JSON.parse(response.SecretString);
}

async function initializeDatabase() {
  const credentials = await getDatabaseCredentials();

  pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: credentials.username,
    password: credentials.password,
    ssl: {
      rejectUnauthorized: false
    }
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      department VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("Database connection established");
  console.log("Employees table ready");
}

app.get("/", (req, res) => {
  res.json({
    application: "CySentra Employee Management System",
    status: "running"
  });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "healthy",
      database: "connected"
    });
  } catch (error) {
    res.status(503).json({
      status: "unhealthy",
      database: "unavailable"
    });
  }
});

app.get("/api/employees", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, department, created_at FROM employees ORDER BY id"
    );

    res.json({
      employees: result.rows
    });
  } catch (error) {
    console.error("Failed to fetch employees:", error.message);

    res.status(500).json({
      error: "Unable to retrieve employees"
    });
  }
});

app.post("/api/employees", async (req, res) => {
  try {
    const { name, email, department } = req.body;

    if (!name || !email || !department) {
      return res.status(400).json({
        error: "name, email and department are required"
      });
    }

    const result = await pool.query(
      `
      INSERT INTO employees (name, email, department)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, department, created_at
      `,
      [name, email, department]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Failed to create employee:", error.message);

    res.status(500).json({
      error: "Unable to create employee"
    });
  }
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`CySentra Employee API listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database initialization failed:", error.message);
    process.exit(1);
  });
