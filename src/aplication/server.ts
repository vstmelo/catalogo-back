import express, { Response, Request, NextFunction } from 'express';
import { route } from './routes/routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: '5000mb' }));

app.use(route);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    },
);

app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));