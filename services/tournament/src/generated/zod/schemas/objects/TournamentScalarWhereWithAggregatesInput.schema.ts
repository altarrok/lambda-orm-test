import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TournamentScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TournamentScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TournamentScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TournamentScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TournamentScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TournamentScalarWhereWithAggregatesInputObjectSchema = Schema;
