import { z } from 'zod';
import { TournamentWhereInputObjectSchema } from './objects/TournamentWhereInput.schema';

export const TournamentDeleteManySchema = z.object({
  where: TournamentWhereInputObjectSchema.optional(),
});
