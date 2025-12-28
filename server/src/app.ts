import cors from 'cors';
import express from 'express';

import errorHandler from './middleware/errorHandler';
import todoRoutes from './routes/todoRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use(errorHandler);

export default app;
