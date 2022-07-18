import { createAWSLambdaRouter } from '@ino-estc/services-shared';
import { TournamentAppRouter } from '@ino-estc/tournament';

const appRouter = createAWSLambdaRouter()
    .merge(TournamentAppRouter)


export type AppRouter = typeof appRouter;