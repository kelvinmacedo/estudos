import {Router} from "express";

import { CidadesController } from "../controllers/cidades";

const router = Router();

router.post('/cidades', CidadesController.create);

export {router};