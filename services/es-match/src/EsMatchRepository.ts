import { PrismaClient } from './generated/prisma-client';

export const EsMatchRepository = new PrismaClient().esMatch;

