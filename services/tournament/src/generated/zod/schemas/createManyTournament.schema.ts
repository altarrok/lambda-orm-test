import { z } from 'zod';
import { TournamentCreateManyInputObjectSchema } from './objects/TournamentCreateManyInput.schema';

export const TournamentCreateManySchema = z.object({
  data: TournamentCreateManyInputObjectSchema,
});
