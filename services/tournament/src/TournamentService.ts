import { Tournament } from "./generated/prisma-client";
import { TournamentRepository } from "./TournamentRepository";

export const createTournament = async (tournament: Tournament) => {
    await TournamentRepository.create({ data: tournament });    
}
