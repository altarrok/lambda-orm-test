import { appRouter } from './server';
import { createTRPCClient } from '@trpc/client';
import { env } from 'process';

if (!env["LAMBDA_URL"]) {
    throw new Error("LAMDA_URL must be set as an env variable");
}

export const client = createTRPCClient<typeof appRouter>({
  url: env["LAMBDA_URL"],
});