import { Prisma, PrismaClient } from './generated/prisma-client';
import { TournamentRepository } from './TournamentRepository';

const client = new PrismaClient();

export const TournamentRepositoryImpl: TournamentRepository = {
    async createTournament(tournament: Prisma.TournamentCreateInput) {
        console.time("~~~");
        const t = await client.tournament.create({ data: tournament });
        console.timeEnd("~~~");
        let metrics = await client.$metrics.json()
        console.log(JSON.stringify(metrics))
        return t;
    } 
}
