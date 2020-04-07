import { RoomEntity } from "./models"

export declare type AddRoomQuery = {
  gameId: string
}

export declare type AddRoomResponse = {
  roomCode: string
}

export declare type GetRoomResponse = {
  room: RoomEntity
}