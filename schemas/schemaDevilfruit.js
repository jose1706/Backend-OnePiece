import { z } from 'zod';

const devilFruitSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required'
  }),
  image: z.string().url({
    invalid_type_error: 'Image must be a valid URL',
    required_error: 'Image is required'
  }),
  description: z.string({
    invalid_type_error: 'Description must be a string',
    required_error: 'Description is required'
  }),
  type: z.string({
    invalid_type_error: 'type must be a string',
    required_error: 'type is required'
  }),
  user: z.string({
    invalid_type_error: 'User must be a string',
    required_error: 'User is required'
  }),
  author: z.string({
    invalid_type_error: 'User must be a string',
    required_error: 'User is required'
  })
});

// Función para validar la fruta del diablo completa
export function validateDevilFruit(input) {
  return devilFruitSchema.safeParse(input);
}

// Función para validar actualizaciones parciales de la fruta del diablo
export function validatePartialDevilFruit(input) {
  return devilFruitSchema.partial().safeParse(input);
}