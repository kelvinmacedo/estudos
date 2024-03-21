import express, { Router } from "express";
import PetController from "../controller/PetController";

const router = express.Router();
const petController = new PetController;

router.post("/petCadastro", petController.criarPet);

export default router;
