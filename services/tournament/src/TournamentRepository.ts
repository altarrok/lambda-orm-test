import { Prisma, Tournament } from "./generated/prisma-client";

export interface TournamentRepository {
    createTournament(tournament: Prisma.TournamentCreateInput): Promise<Tournament>
}