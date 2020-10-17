var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // this is the dropdown menu we want to add rooms to

  initialize: function() {
    // add available rooms to select dropdown
    RoomsView.$select.append("<option value='lobby'>Lobby</option>");
    RoomsView.$select.append("<option value='hobby'>Hobby</option>");

    $('.addroom').on('click', RoomsView.addRoom);

    RoomsView.$select.on('change', function() {
      var selectedRoom = $(this).val();
      RoomsView.renderRoom(selectedRoom);
    });

  },

  renderRoom: function(room) {
    console.log(room);
  // default room is lobby
  // updates if user changes room/adds room
  },

  addRoom: function() {
    // the room that's appended should be whatever new room the user makes up?
    // RoomsView.$select.append("<option value='lobby'>Lobby</option>");
  }

  // add room function here
  // if user clicks on add room button, update Rooms.currentRoom
  //FormView.$form.on('submit', FormView.handleSubmit); <--syntax model

  // this should then trigger the render function

};
