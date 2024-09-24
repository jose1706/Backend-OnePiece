
//import { UserModel } from "../models/user-model.js"; // modelo con memoria de maquina sin persistencia de datos
import { UserModel } from '../models/sequelize/users-model-sequelize.js';
import { validateUser, validatePartialUser } from '../schemas/scemaUser.js';

export class UserController {
  // Obtener todos los usuarios
  static async getAllUser(req, res) {
    const users = await UserModel.getAll();
    res.json(users);
  }

  // Obtener un usuario por su id
  static async getUserById(req, res) {
    const { id } = req.params;
    const user = await UserModel.getById({ id });
    if (user) return res.json(user);
    res.status(404).json({ message: 'User not found' });
  }



  // Crear un nuevo usuario
  static async createUser(req, res) {
    const result = validateUser(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newUser = await UserModel.create({ input: result.data });
    res.status(201).json(newUser);
  }


  // Actualizar un usuario
  static async updateUser(req, res) {
    const result = validatePartialUser(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updatedUser = await UserModel.update({ id, input: result.data });
    res.json(updatedUser);
  }
}
