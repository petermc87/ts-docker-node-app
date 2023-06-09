// import { table } from 'console';
import { Knex } from 'knex';

// To add columns or change things
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('post', (table) => {
    //We want to craete specific length strings.
    // Make it a 16 character id
    table.specificType('id', 'CHAR(16)').primary();
    table.string('slug').notNullable().unique();
    table.string('title').notNullable();
    table.text('content');
    //Add an index of timestamp so that they are ordered by the publish date.
    table.timestamp('publishedAt').index();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
}

// This is how would undo it!
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
}
