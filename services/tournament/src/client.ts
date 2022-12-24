import { appRouter } from './server';
import { createTRPCClient } from '@trpc/client';
import fetch from 'node-fetch';

export const client = createTRPCClient<typeof appRouter>({
  url: 'https://dtn3w8sk40.execute-api.us-east-1.amazonaws.com/Prod/createTournament/',
  fetch: fetch as any
});