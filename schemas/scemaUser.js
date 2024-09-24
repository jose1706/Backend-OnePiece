import { z } from 'zod';

const userSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required'
  }),

  password: z.string(),

  email: z.string().email({
    message: 'Email must be a valid email address'
  })
});


export function validateUser(input) {
  return userSchema.safeParse(input);
}


export function validatePartialUser(input) {
  return userSchema.partial().safeParse(input);
}
