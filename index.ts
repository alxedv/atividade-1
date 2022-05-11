import express, { Request, Response } from 'express';
import UsersRoutes from './routes/usersRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/users', UsersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});