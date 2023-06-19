import express from 'express';
import morgan from 'morgan';
import db from './module/db';

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const posts = await db.post.findMany({
    where: { publishedAt: { not: null } },
  });
  res.json(posts);
  // res.json({ hello: 'world3' });
});

const port = Number(process.env.PORT || 8080);

//0.0.0.0 is the second 'host' arguement you need to run docker.
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
