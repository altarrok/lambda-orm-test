import { TournamentCreateInputObjectSchema } from './generated/zod/schemas/objects/TournamentCreateInput.schema';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { createAWSLambdaRouter, createContext } from '@ino-estc/services-shared';
import { TournamentServiceImpl } from './TournamentServiceImpl';

export const appRouter = createAWSLambdaRouter()
  .mutation('createTournament', {
    input: TournamentCreateInputObjectSchema,
    async resolve(req) {
      return await TournamentServiceImpl.createTournament(req.input);
    },
  });

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});
