import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().positive().int().gte(0)
    .lte(2500),
});

type IMotorcycle = z.infer<typeof motorcycleZodSchema>;

export { 
  IMotorcycle,
  motorcycleZodSchema,
};