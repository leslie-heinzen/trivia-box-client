import { useState, useEffect } from 'react';
import { apiClient } from '../clients/api-client';
import { RoomEntity } from '../types';

export function useRoom(roomCode: string) {
  const [room, setRoom] = useState<RoomEntity | null>(null);

  useEffect(() => {
    let isMounted = true;
    apiClient.getRoom(roomCode)
      .then(r => {
        if (isMounted){
          setRoom(r.room);
        }
      });

    return function cleanup() {
      isMounted = false;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return room;
}