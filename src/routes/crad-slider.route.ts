import express from 'express';
import { getSliderController } from '../controllers/crad-slider.controller';

const router = express.Router();

router.get('/slides', getSliderController);

export default router;