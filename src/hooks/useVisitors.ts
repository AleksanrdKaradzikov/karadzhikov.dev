import { useState } from 'react';

interface State {
    isLoading: boolean;
    views: number;
}

export const useVisitors = (): [visitors: State, setVisitors: (state: State) => void] => {
    const [visitors, setVisitors] = useState<State>({ isLoading: false, views: 0 });

    return [visitors, setVisitors];
}