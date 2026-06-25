import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';
import categoryRoutes from './categoryRoutes';

const apiRouter: Router = Router();

apiRouter.use('/product', productRoutes);

apiRouter.use('/category', categoryRoutes);

apiRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default apiRouter;