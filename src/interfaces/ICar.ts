import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  // Deve ser um valor inteiro positivo maior ou igual a 2 e menor ou igual a 4:
  doorsQty: z.number().min(2).max(4),
  // Deve ser maior ou igual a 2 e menor ou igual a 7:
  seatsQty: z.number().min(2).max(7),
});

type ICar = z.infer<typeof carZodSchema>;

export { 
  ICar,
  carZodSchema,
};