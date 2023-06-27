const { Pool } = require("pg");

const PG_URI =
  "postgres://gfnkxmtf:Is08Be6qFLqqe3_vQ-K8KTaqIMV07Ee2@rajje.db.elephantsql.com/gfnkxmtf";

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
	"_id" serial primary key,
	"user_id" bigint references users("_id"),
	"feature_name" varchar,
	"description" varchar,
	"created_on" timestamp default CURRENT_TIMESTAMP not null
);

CREATE TABLE test (
	"_id" serial primary key,
	"feature_id" bigint references feature("_id"),
	"test_name" varchar,
	"description" varchar,
	"status" varchar,
	"category" varchar,
	"created_on" timestamp default CURRENT_TIMESTAMP not null
);

*/

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
