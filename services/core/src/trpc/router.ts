import { createAWSLambdaRouter } from '@ino-estc/services-shared';
import { TournamentAppRouter } from '@ino-estc/tournament';
import { EsMatchAppRouter } from '@ino-estc/es-match';

const appRouter = createAWSLambdaRouter()
    .merge(TournamentAppRouter)
    .merge(EsMatchAppRouter);


export type AppRouter = typeof appRouter;