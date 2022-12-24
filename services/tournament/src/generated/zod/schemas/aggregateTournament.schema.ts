import { z } from 'zod';
import { TournamentWhereInputObjectSchema } from './objects/TournamentWhereInput.schema';
import { TournamentOrderByWithRelationInputObjectSchema } from './objects/TournamentOrderByWithRelationInput.schema';
import { TournamentWhereUniqueInputObjectSchema } from './objects/TournamentWhereUniqueInput.schema';

export const TournamentAggregateSchema = z.object({
  where: TournamentWhereInputObjectSchema.optional(),
  orderBy: TournamentOrderByWithRelationInputObjectSchema.optional(),
  cursor: TournamentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
