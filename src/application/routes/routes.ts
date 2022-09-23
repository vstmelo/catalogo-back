import { Router } from "express";

import { filmeRoute } from '../controller/filmes/routes';

const route = Router();

route.use(filmeRoute);

export { route } 