import { PrismaClient } from './generated/prisma-client';

export const TournamentRepository = new PrismaClient().tournament;

