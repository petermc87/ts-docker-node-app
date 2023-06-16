// Create a Prisma client to cnnect to the db - custom client
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

//Every query and error can be specified for logging.
const db = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

export default db;

//There are different kind of ids!
//- Big int incremental.
//- UUid's - standard in Postgres but are very long!

//You can create your own id! - nanoid is a library that has shortened id generator.

// Create a helper function that calls nanoid
export const genId = () => nanoid(16);
