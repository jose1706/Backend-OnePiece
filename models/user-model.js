import { readJSON } from "../utils.js";

const users = readJSON('./users.json');

export class UserModel {
  // Obtener todos los usuarios
  static async getAll() {
    return users;
  }

  // Obtener un usuario por su ID
  static async getById({ id }) {
    const user = users.find(user => user.id === Number(id));
    return user;
  }

  // Obtener un usuario por su nombre de usuario
  static async getByUsername({ username }) {
    const user = users.find(user => user.username === username);
    return user;
  }

  // Crear un nuevo usuario
  static async create({ input }) {
    const newUser = {
      id: (Math.floor(Math.random() * 1000) + 1),
      ...input
    };

    users.push(newUser);
    return newUser;
  }

  // Eliminar un usuario por su ID
  static async delete({ id }) {
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex === -1) return false;

    users.splice(userIndex, 1);
    return true;
  }

  // Actualizar un usuario por su ID
  static async update({ id, input }) {
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex === -1) return false;

    users[userIndex] = {
      ...users[userIndex],
      ...input
    };

    return users[userIndex];
  }
}
