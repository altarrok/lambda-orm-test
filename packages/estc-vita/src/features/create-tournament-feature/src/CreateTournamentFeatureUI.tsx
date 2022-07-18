import React from 'react';
import { trpc } from '../../../utils/trpc';
import { TCreateTournamentUIComponent } from './CreateTournamentFeatureTypes';

type TCreateTournamentFeatureUIProps = {
    BaseUI: TCreateTournamentUIComponent;
}

export const CreateTournamentFeatureUI: React.FC<TCreateTournamentFeatureUIProps> = (props) => {
    const createTournament = trpc.useMutation("createTournament");

    return (
        <>
            <props.BaseUI
                onFinish={createTournament.mutate}
                loading={createTournament.isLoading}
                error={createTournament.error?.message}
            />
        </>
    );
};