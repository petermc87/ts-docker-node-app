import db, { genId } from '../../src/module/db';

const run = async () => {
  // pulling from our Prisma schema.
  await db.post.createMany({
    //Typescript will generate some types for creating the
    //data to be seeded. In this case, we are creating an array of
    //objects with info in them.
    data: [
      {
        //A post variation that has been published.
        id: genId(),
        slug: 'ultimate-node-stack',
        title: 'Ultimate Node Stack 2023!! Go get them!!',
        publishedAt: new Date(),
      },
      {
        //A post that is currently in draft stage, so no publishedAt.
        id: genId(),
        slug: 'draft-post',
        title: 'This post aint done yet.',
      },
    ],
  });
};

//If the main node module is this one, then we will call the run function in
//the if statement.
if (require.main === module) {
  run().then(() => {
    console.log('data seed complete');
    process.exit();
  });
}
