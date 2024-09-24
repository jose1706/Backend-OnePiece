import { Router } from 'express';
import { DevilFruitController } from '../controllers/DevilfruitController.js';

export const devilFruitRouter = Router();

devilFruitRouter.get('/', DevilFruitController.getAll);

devilFruitRouter.post('/', DevilFruitController.create);

devilFruitRouter.get('/:id', DevilFruitController.getById);

devilFruitRouter.patch('/:id', DevilFruitController.update);

devilFruitRouter.delete('/:id', DevilFruitController.delete);
