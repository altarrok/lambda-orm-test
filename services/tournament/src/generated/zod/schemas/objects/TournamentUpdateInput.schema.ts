import { z } from 'zod';

import type { Prisma } from '../../../prisma-client';

const Schema: z.ZodType<Prisma.TournamentUpdateInput> = z.object({}).strict();

export const TournamentUpdateInputObjectSchema = Schema;
