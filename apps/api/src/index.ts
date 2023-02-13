import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();
const app = express();

const { PORT } = process.env;

app.use(helmet())
    .use(helmet.hidePoweredBy())
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World!',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});
