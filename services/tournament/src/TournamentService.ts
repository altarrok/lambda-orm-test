import { Prisma, Tournament } from "./generated/prisma-client";

export interface TournamentService {
    createTournament: (tournament: Prisma.TournamentCreateInput) => Promise<Tournament>;
}
