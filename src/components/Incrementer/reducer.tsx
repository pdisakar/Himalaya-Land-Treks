import { createContext, useReducer, ReactNode } from 'react';
import { INCREMENT, DECREMENT } from './types';

interface State { count: number }
interface IncrementAction { type: typeof INCREMENT; payload: number }
interface DecrementAction { type: typeof DECREMENT; payload: number }

type Action = IncrementAction | DecrementAction;

const initialState: State = {
  count: 0,
};

export const Context = createContext<[State, React.Dispatch<Action>] | undefined>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    default:
      throw new Error('Unknown action');
  }
}

interface StoreProviderProps { children?: ReactNode }
export default function StoreProvider(props: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{props.children}</Context.Provider>;
}
