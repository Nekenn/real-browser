import express from 'express';
import { Test } from '../controller/test.js';
import { ConnexionController } from '../controller/connexion.controller.js';

const router = express.Router();

router.post('/connexion',ConnexionController.getConnexion)

export default router;