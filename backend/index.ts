import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!');
});

app.listen(PORT, () => {
	console.log(`Server has been started at http://localhost:${PORT}`);
});
