import * as dotenv from 'dotenv';

dotenv.config();

export { appRouter as TournamentAppRouter, handler } from './server';
export { client as TournamentClient } from "./client";
