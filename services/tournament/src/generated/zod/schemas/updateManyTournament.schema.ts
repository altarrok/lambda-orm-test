import { z } from 'zod';
import { TournamentUpdateManyMutationInputObjectSchema } from './objects/TournamentUpdateManyMutationInput.schema';
import { TournamentWhereInputObjectSchema } from './objects/TournamentWhereInput.schema';

export const TournamentUpdateManySchema = z.object({
  data: TournamentUpdateManyMutationInputObjectSchema,
  where: TournamentWhereInputObjectSchema.optional(),
});
