import { User } from "./usersTable.js";

export class UserModel {
  // Obtener todos los usuarios
  static async getAll() {
    const users = await User.findAll();
    return users.map(user => user.toJSON());
  }

  // Obtener un usuario por su ID
  static async getById({ id }) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`No se encontró un usuario con el ID ${id}`);
    }
    return user.toJSON();
  }

  // Obtener un usuario por su nombre de usuario
  static async getByUsername({ username }) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error(`No se encontró un usuario con el nombre de usuario ${username}`);
    }
    return user.toJSON();
  }

  // Crear un nuevo usuario
  static async create({ input }) {
    const newUser = await User.create({ id: (Math.floor(Math.random() * 1000) + 1), ...input });
    return newUser.toJSON();
  }

  // Eliminar un usuario por su ID
  static async delete({ id }) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`No se encontró un usuario con el ID ${id}`);
    }
    await user.destroy();
    return true;
  }

  // Actualizar un usuario por su ID
  static async update({ id, input }) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`No se encontró un usuario con el ID ${id}`);
    }
    await user.update(input);
    return user.toJSON();
  }
}
