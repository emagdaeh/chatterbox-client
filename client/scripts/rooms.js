var Rooms = {
  currentRoom: 'lobby',
  availableRooms: [],


  add: function() {
    var newRoomName = $('#newroomtextfield').val();
    if (newRoomName) {
      newRoomName.escape();
      Rooms.availableRooms.push(newRoomName);
      RoomsView.$select.append('<option value="newRoomName">newRoomName</option>');
      $('#newroomtextfield').val('');
    }
  }
};