import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentUncheckedUpdateManyInput> = z
  .object({})
  .strict();

export const TournamentUncheckedUpdateManyInputObjectSchema = Schema;
