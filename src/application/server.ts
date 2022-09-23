import express, { Response, Request, NextFunction } from 'express';
import { route } from './routes/routes';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: '5000mb' }));

app.use(route);

app.use(ErrorHandler);

app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));
