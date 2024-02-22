import {Router} from "express";

import { CidadesController } from "../controllers";

const router = Router();

router.post('/cidades', CidadesController.create);

export {router};