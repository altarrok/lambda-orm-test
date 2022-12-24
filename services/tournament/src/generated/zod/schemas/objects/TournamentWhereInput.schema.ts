import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TournamentWhereInputObjectSchema),
        z.lazy(() => TournamentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TournamentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TournamentWhereInputObjectSchema),
        z.lazy(() => TournamentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TournamentWhereInputObjectSchema = Schema;
