import { useEffect, useReducer } from 'react';
import { hubClient } from '../clients/hub-client';
import { hubReducer } from '../reducers/hubReducer';
// Types
import { GameState } from '../types/models';
import { State } from '../types/room-state';
import { HubClientSpec, HubMethod, HubListener } from '../types/hub';

export function useHubClient({ startAction, listeners } : HubClientSpec): State {
  const [state, dispatch] = useReducer(hubReducer, { gameState: GameState.Waiting } as State);

  useEffect(() => {
    let isLive = true;

    hubClient.start()
      .then(() => {
        hubClient.invoke(startAction.methodName, ...startAction.args);
      });
      
    // attach hub listeners
    setListeners("on", listeners)

    return function cleanup() {
      // detach hub listeners
      isLive = false;
      setListeners("off", listeners);
      hubClient.stop();
    };

    function setListeners(clientMethod: HubMethod, listeners: HubListener[]) {
      for (const listener of listeners) {
        hubClient[clientMethod](listener, (res) => {
          if (isLive) {            
            dispatch([listener, res]);

            if (listener === "sendPlayersUpdate") {
              setTimeout(function() { 
                if (isLive) {
                  dispatch(["sendPlayersUpdate", ""])
                }
              }, 4000);
            }
          }
        });
      }
    }
  }, []); // eslint-disable-next-line

  return state;
}
