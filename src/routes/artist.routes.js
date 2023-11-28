import express from 'express';
const router = express.Router();
import { getAllArtists,getTopArtists,getArtistById } from '../controllers/artist.controller.js';

router.get('/',getAllArtists);
router.get('/:id',getArtistById);
router.get('/top',getTopArtists);

export default router