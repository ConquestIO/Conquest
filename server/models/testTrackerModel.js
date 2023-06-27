import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

const PG_URI =
  "postgres://ohrndtor:fguMG3DeFLWz5mdIsTspVdwR7Hy9_N3O@rajje.db.elephantsql.com/ohrndtor";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

/*
Created the schemas on elephantSQL browser

CREATE TABLE users (
	"_id" serial primary key,
	"username" varchar,
	"password" varchar,
	"created_on" timestamp default CURRENT_TIMESTAMP not null
);

CREATE TABLE feature (
	"_id" varchar primary key,
	"user_id" bigint references users("_id"),
	"feature_name" varchar,
	"description" varchar,
	"created_on" timestamp default CURRENT_TIMESTAMP not null
);

CREATE TABLE test (
	"_id" varchar primary key,
	"feature_id" varchar references feature("_id"),
	"test_name" varchar,
	"description" varchar,
	"status" varchar,
	"category" varchar,
	"created_on" timestamp default CURRENT_TIMESTAMP not null
);

*/

// module.exports = {
//   query: (text, params, callback) => {
//     console.log("executed query", text);
//     return pool.query(text, params, callback);
//   },
// };

export default {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
