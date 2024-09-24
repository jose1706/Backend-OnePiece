import { DevilFruit } from "./devilFruitTable.js";

export class DevilFruitModel {
  // Obtener todas las frutas del diablo, con la posibilidad de filtrar por tipo
  static async getAll() {
    const fruits = await DevilFruit.findAll();
    return fruits.map(fruit => fruit.toJSON());
  }

  // Obtener una fruta del diablo por su ID
  static async getById({ id }) {
    const fruit = await DevilFruit.findByPk(id);
    if (!fruit) {
      throw new Error(`No se encontró una fruta del diablo con el ID ${id}`);
    }
    return fruit.toJSON();
  }

  // Crear una nueva fruta del diablo
  static async create({ input }) {
    const newFruit = await DevilFruit.create({ id: (Math.floor(Math.random() * 1000) + 1), ...input });
    return newFruit.toJSON();
  }

  // Eliminar una fruta del diablo por su ID
  static async delete({ id }) {
    const fruit = await DevilFruit.findByPk(id);
    if (!fruit) {
      throw new Error(`No se encontró una fruta del diablo con el ID ${id}`);
    }
    await fruit.destroy();
    return true;
  }

  // Actualizar una fruta del diablo por su ID
  static async update({ id, input }) {
    const fruit = await DevilFruit.findByPk(id);
    if (!fruit) {
      throw new Error(`No se encontró una fruta del diablo con el ID ${id}`);
    }
    await fruit.update(input);
    return fruit.toJSON();
  }
}
