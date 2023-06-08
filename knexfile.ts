import { Knex } from 'knex';

//Types for configuring Knex.
const config: Knex.Config = {
  //Pg package installed.
  client: 'pg',
  // Connection URL from docker compose file
  connection: process.env.DATABASE_URL,
  // We want TS as well as JS migrations
  migrations: {
    extension: 'ts',
  },
};

export default config;
