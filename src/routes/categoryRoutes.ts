import { Router } from 'express';

import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from '../controllers/categoryController';

const categoryRouter: Router = Router();

categoryRouter.get('/', getAllCategories);

categoryRouter.get('/:id', getCategoryById);

categoryRouter.post('/', createCategory);

export default categoryRouter;