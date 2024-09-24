
//import { DevilFruitModel } from "../models/devilfruit-model.js"; //modelo con memoria de maquina, no persistencia de las datos
import { DevilFruitModel } from "../models/sequelize/devilFruit-model-sequelize.js"; //modelo con sequelize 
import { validateDevilFruit, validatePartialDevilFruit } from '../schemas/schemaDevilfruit.js';

export class DevilFruitController {
  // Obtener todas las frutas del diablo para mostrar la lista en el homepage
  static async getAll(req, res) {
    const fruits = await DevilFruitModel.getAll();
    res.json(fruits);
  }

  // Obtener una fruta del diablo por su id para mostrar la vista detallada
  static async getById(req, res) {
    const { id } = req.params;
    const fruit = await DevilFruitModel.getById({ id });
    if (fruit) return res.json(fruit);
    res.status(404).json({ message: 'Devil fruit not found' });
  }

  // Crear una nueva fruta del diablo
  static async create(req, res) {
    const result = validateDevilFruit(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newFruit = await DevilFruitModel.create({ input: result.data });
    res.status(201).json(newFruit);
  }

  // Eliminar una fruta del diablo
  static async delete(req, res) {
    const { id } = req.params;
    const result = await DevilFruitModel.delete({ id });
    if (result === false) {
      return res.status(404).json({ message: 'Devil fruit not found' });
    }

    res.json({ message: 'Devil fruit deleted' });
  }

  // Actualizar una fruta del diablo
  static async update(req, res) {
    const result = validatePartialDevilFruit(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updatedFruit = await DevilFruitModel.update({ id, input: result.data });
    res.json(updatedFruit);
  }
}
