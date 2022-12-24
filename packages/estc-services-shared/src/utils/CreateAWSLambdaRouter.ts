import * as trpc from '@trpc/server';
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { type APIGatewayProxyEventV2 } from 'aws-lambda';

export const createContext = ({
    event,
    context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) => ({})
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createAWSLambdaRouter = () => {
    return trpc.router<Context>();
}