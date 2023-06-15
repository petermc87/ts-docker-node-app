// import { Knex } from 'knex';

// //Types for configuring Knex!! This is very helpful!
// const config: Knex.Config = {
//   //Pg package installed.
//   client: 'pg',
//   // Connection URL from docker compose file
//   connection: process.env.DATABASE_URL,
//   // We want TS as well as JS migrations
//   migrations: {
//     extension: 'ts',
//   },
// };

// export default config;

import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
  },
};

export default config;
