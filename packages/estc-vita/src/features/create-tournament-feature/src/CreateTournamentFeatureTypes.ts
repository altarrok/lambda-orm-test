import { Tournament } from "@ino-estc/tournament";

export type TCreateTournamentUIComponent = React.ComponentType<{ 
    onFinish: (tournament: Tournament) => void,
    loading: boolean;
    error?: string; 
}>;
