import express from 'express';
import { port } from '../config/config.json';
import bodyParser from 'body-parser';
import cors from 'cors'; 

import slideRouter from './routes/crad-slider.route';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(slideRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));

