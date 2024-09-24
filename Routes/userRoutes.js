import { Router } from 'express';
import { UserController } from '../controllers/usersController.js';

export const userRouter = Router();

// Obtener todos los usuarios
userRouter.get('/', UserController.getAllUser);

// Registrar un nuevo usuario
userRouter.post('/', UserController.createUser);

// Obtener un usuario por ID

userRouter.get('/:id', UserController.getUserById);

/* // Iniciar sesión de un usuario
userRouter.post('/login', UserController.login);  */// mirar que logica se sigue utilizando esta forma de logear


// Actualizar un usuario por ID
userRouter.patch('/:id', UserController.updateUser);

