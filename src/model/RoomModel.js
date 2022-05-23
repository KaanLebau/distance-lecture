import { Room } from "./data/Room";

class RoomModel {
  constructor() {
    this.rooms = Room;
    this.room = null;
  }

  setRoom(param) {
    this.room = this.rooms[param];
    return this.room;
  }

  getAllTemperatur() {
    return this.room.sensorData.temperature;
  }

  getLastTemperatur() {
    const last = this.room.sensorData.temperature.length - 1;
    return this.room.sensorData.temperature[last];
  }

  getAllHumidity() {
    return this.room.sensorData.humdidity;
  }

  getLastHumidity() {
    const last = this.room.sensorData.humdidity.length - 1;
    return this.room.sensorData.humdidity[last];
  }

  getAllAirQuality() {
    return this.room.sensorData.airQuality;
  }

  getLastAirQuality() {
    const last = this.room.sensorData.airQuality.length - 1;
    return this.room.sensorData.airQuality[last];
  }
}

export default RoomModel;
