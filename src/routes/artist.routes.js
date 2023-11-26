import express from 'express';
const router = express.Router();
import { getAllArtists,getTopArtists } from '../controllers/artist.controller.js';

router.get('/',getAllArtists);
router.get('/top',getTopArtists);

export default router