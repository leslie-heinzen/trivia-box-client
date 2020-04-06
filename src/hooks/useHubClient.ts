import { useEffect, useReducer } from 'react';
import { hubClient } from '../clients/hub-client';
import { hubReducer } from '../reducers/hubReducer';
import { State, HubClientSpec, HubMethod, HubListener, GameState } from '../types';

export function useHubClient({ startAction, listeners } : HubClientSpec): State {
  const [state, dispatch] = useReducer(hubReducer, { gameState: GameState.Waiting } as State);

  useEffect(() => {
    hubClient.start()
      .then(() => {
        hubClient.invoke(startAction.methodName, ...startAction.args);
      });
      
    // attach hub listeners
    setListeners("on", listeners)

    return function cleanup() {
      // detach hub listeners
      setListeners("off", listeners);
      hubClient.stop();
    };

    function setListeners(clientMethod: HubMethod, listeners: HubListener[]): void {
      for (const listener of listeners) {
        hubClient[clientMethod](listener, (res) => {
            // dispatch
            dispatch([listener, res]);
        });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
}
