
import * as signalR from "@microsoft/signalr";

export const hubClient = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5001/room-hub", {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
  })
  .configureLogging(signalR.LogLevel.Information)
  .build();
