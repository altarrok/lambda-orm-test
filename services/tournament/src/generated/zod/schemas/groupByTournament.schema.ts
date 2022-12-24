import { z } from 'zod';
import { TournamentWhereInputObjectSchema } from './objects/TournamentWhereInput.schema';
import { TournamentOrderByWithAggregationInputObjectSchema } from './objects/TournamentOrderByWithAggregationInput.schema';
import { TournamentScalarWhereWithAggregatesInputObjectSchema } from './objects/TournamentScalarWhereWithAggregatesInput.schema';
import { TournamentScalarFieldEnumSchema } from './enums/TournamentScalarFieldEnum.schema';

export const TournamentGroupBySchema = z.object({
  where: TournamentWhereInputObjectSchema.optional(),
  orderBy: TournamentOrderByWithAggregationInputObjectSchema,
  having: TournamentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TournamentScalarFieldEnumSchema),
});
