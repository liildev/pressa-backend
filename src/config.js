import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), "src", ".env") });

const pgConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const secret = process.env.SECRET;

export { pgConfig, secret };
