import { EsMatch } from "./generated/prisma-client";
import { EsMatchRepository } from "./EsMatchRepository";
import { TournamentClient } from "@ino-estc/tournament";

export const createEsMatch = async (esMatch: EsMatch) => {
    await TournamentClient.mutation("createTournament", { id: 'woo' });
    await EsMatchRepository.create({ data: esMatch });
}
