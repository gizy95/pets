// animals.js
import express from 'express';
import animalList from "../controllers/animalsController.js";
import animalId from '../controllers/idController.js';

const animalsRouter = express.Router();


animalsRouter.get("/:pet_type", animalList);
animalsRouter.get("/:pet_type/:pet_id", animalId);

export default animalsRouter;