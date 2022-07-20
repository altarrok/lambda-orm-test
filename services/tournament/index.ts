export * from './zod';

export { appRouter as TournamentAppRouter } from './src/server';
export type { Tournament } from './src/generated/prisma-client';
export { client as TournamentClient } from "./src/client";
