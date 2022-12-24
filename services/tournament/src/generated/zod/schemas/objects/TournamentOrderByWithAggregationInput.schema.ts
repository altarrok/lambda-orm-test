import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TournamentCountOrderByAggregateInputObjectSchema } from './TournamentCountOrderByAggregateInput.schema';
import { TournamentMaxOrderByAggregateInputObjectSchema } from './TournamentMaxOrderByAggregateInput.schema';
import { TournamentMinOrderByAggregateInputObjectSchema } from './TournamentMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TournamentCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TournamentMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TournamentMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TournamentOrderByWithAggregationInputObjectSchema = Schema;
