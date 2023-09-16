import express  from "express";

import { router } from "./routes";

const serve = express();

serve.use(express.json());

serve.use(router);

export { serve};
