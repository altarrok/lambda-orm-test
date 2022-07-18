import { PrismaClient } from '@prisma/client'

export const TournamentRepository = new PrismaClient().tournament;

