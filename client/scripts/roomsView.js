var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // this is the dropdown menu we want to add rooms to

  initialize: function() {
    // add available rooms to select dropdown
    RoomsView.$select.append('<option value="lobby">Lobby</option>');

    $('#rooms').append('<input type="text" id="newroomtextfield">');
    RoomsView.$button.on('click', Rooms.add);

    RoomsView.$select.on('change', function() {
      var selectedRoom = $(this).val();
      RoomsView.renderRoom(selectedRoom);
    });

  },

  renderRoom: function(room) {
    // change the currentRoom property of Room
    // room is the roomname
    // filter messages by roomname property
  },
};
