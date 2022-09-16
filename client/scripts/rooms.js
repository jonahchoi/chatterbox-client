// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(roomName) {
    this._data.push(roomName);
  },

  update: function(newRoomList) {
    this._data = newRoomList;
  }
};