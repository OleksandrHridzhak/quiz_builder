import 'dotenv/config';
import express from 'express';
import quizRoutes from './quiz.routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from basic Express server!');
});

app.use('/quizzes', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
