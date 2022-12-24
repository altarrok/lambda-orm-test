import { z } from 'zod';
import { TournamentWhereUniqueInputObjectSchema } from './objects/TournamentWhereUniqueInput.schema';

export const TournamentFindUniqueSchema = z.object({
  where: TournamentWhereUniqueInputObjectSchema,
});
