import { readJSON } from '../utils.js';

const devilFruits = readJSON('./devilFruits.json');


export class DevilFruitModel {
  // Obtener todas las frutas del diablo, con la posibilidad de filtrar por tipo
  static async getAll() {
    return devilFruits;
  }

  // Obtener una fruta del diablo por su ID
  static async getById({ id }) {
    const fruit = devilFruits.find(fruit => fruit.id === Number(id));
    return fruit;
  }

  // Crear una nueva fruta del diablo
  static async create({ input }) {
    const newFruit = {
      id: (Math.floor(Math.random() * 1000) + 1),
      ...input
    };

    devilFruits.push(newFruit);
    return newFruit;
  }

  // Eliminar una fruta del diablo por su ID
  static async delete({ id }) {
    const fruitIndex = devilFruits.findIndex(fruit => fruit.id === Number(id));
    if (fruitIndex === -1) return false;

    devilFruits.splice(fruitIndex, 1);
    return true;
  }

  // Actualizar una fruta del diablo por su ID
  static async update({ id, input }) {
    const fruitIndex = devilFruits.findIndex(fruit => fruit.id === Number(id));
    if (fruitIndex === -1) return false;

    devilFruits[fruitIndex] = {
      ...devilFruits[fruitIndex],
      ...input
    };

    return devilFruits[fruitIndex];
  }
}
