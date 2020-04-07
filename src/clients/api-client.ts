import 'isomorphic-fetch';
import { Post, Pretend, IPretendRequest, Get } from 'pretend';
import { AddRoomQuery, AddRoomResponse, GetRoomResponse } from '../types/api';

class ApiClient {
  @Post('/room')
  public async addRoom(addRoomQuery?: AddRoomQuery) { return {} as AddRoomResponse; } 

  @Get('/room/{roomCode}')
  public async getRoom(roomCode: string) { return {} as GetRoomResponse; } 
}

export const apiClient = Pretend
  .builder()
  .requestInterceptor((request: IPretendRequest) => {
    request.options.headers = {
      ...request.options.headers,
      'credentials': 'include',
      'Content-Type': 'application/json; charset=utf-8'
    };

    return request;
  })
  .target(ApiClient, 'http://localhost:5001/api');
