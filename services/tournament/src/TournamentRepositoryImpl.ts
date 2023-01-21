import { Prisma, PrismaClient } from './generated/prisma-client';
import { TournamentRepository } from './TournamentRepository';

const client = new PrismaClient({ log: [{ emit: 'event', level: 'query', }, { emit: 'stdout', level: 'error', }, { emit: 'stdout', level: 'info', }, { emit: 'stdout', level: 'warn', },], });

client.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  })


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
