import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TournamentUpdateManyMutationInputObjectSchema = Schema;
