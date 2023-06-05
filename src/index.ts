import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  debugger;
  res.json({ hello: fromVariable });
});

const port = Number(process.env.PORT || 8080);

//0.0.0.0 is the second 'host' arguement you need to run docker.
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
