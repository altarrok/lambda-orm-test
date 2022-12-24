import { z } from 'zod';
import { TournamentWhereUniqueInputObjectSchema } from './objects/TournamentWhereUniqueInput.schema';

export const TournamentDeleteOneSchema = z.object({
  where: TournamentWhereUniqueInputObjectSchema,
});
