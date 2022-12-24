import { z } from 'zod';
import { TournamentUpdateInputObjectSchema } from './objects/TournamentUpdateInput.schema';
import { TournamentWhereUniqueInputObjectSchema } from './objects/TournamentWhereUniqueInput.schema';

export const TournamentUpdateOneSchema = z.object({
  data: TournamentUpdateInputObjectSchema,
  where: TournamentWhereUniqueInputObjectSchema,
});
