import { z } from 'zod';
import { TournamentCreateInputObjectSchema } from './objects/TournamentCreateInput.schema';

export const TournamentCreateOneSchema = z.object({
  data: TournamentCreateInputObjectSchema,
});
