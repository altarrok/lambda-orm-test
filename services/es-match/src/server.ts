import { EsMatchModel } from '../zod';
import { createEsMatch } from './EsMatchService';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { createAWSLambdaRouter, createContext } from '@ino-estc/services-shared';

export const appRouter = createAWSLambdaRouter()
  .mutation('createEsMatch', {
    input: EsMatchModel,
    async resolve(req) {
      return await createEsMatch(req.input);
    },
  });

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});