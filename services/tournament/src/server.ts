import { TournamentModel } from '../zod';
import { createTournament } from './TournamentService';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { createAWSLambdaRouter, createContext } from '@ino-estc/services-shared';

export const appRouter = createAWSLambdaRouter()
  .mutation('createTournament', {
    input: TournamentModel,
    async resolve(req) {
      return await createTournament(req.input);
    },
  });

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});