import { z } from 'zod';

// REQUISITO 2
export const vehicleZodSchema = z.object({
  // Deve ser uma string com, pelo menos, 3 caracteres:
  model: z.string().min(3),
  // Deve ser um valor inteiro positivo maior ou igual a 1900, porém menor ou igual a 2022:
  year: z.number().min(1900).max(2022),
  // Deve ser uma string com, pelo menos, 3 caracteres:
  color: z.string().min(3),
  // Deve receber valores booleanos e deve ser opcional:
  status: z.optional(z.boolean()),
  // Deve receber apenas números inteiros:
  buyValue: z.number(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export {
  IVehicle,
};