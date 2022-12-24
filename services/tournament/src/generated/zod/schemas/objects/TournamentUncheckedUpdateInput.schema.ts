import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentUncheckedUpdateInput> = z
  .object({})
  .strict();

export const TournamentUncheckedUpdateInputObjectSchema = Schema;
