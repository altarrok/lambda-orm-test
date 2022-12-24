import { Prisma, Tournament } from "./generated/prisma-client";
import { TournamentRepositoryImpl } from "./TournamentRepositoryImpl";
import { TournamentService } from "./TournamentService";

export const TournamentServiceImpl: TournamentService = {
    createTournament: async function (tournament: Prisma.TournamentCreateInput): Promise<Tournament> {
        return await TournamentRepositoryImpl.createTournament(tournament);
    }
}