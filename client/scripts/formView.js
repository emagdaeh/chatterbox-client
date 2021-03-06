var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    FormView.handleMessageUserCreated();
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleMessageUserCreated: function() {
    var userMessage = $('#message').val();

    var message = {
      username: App.username,
      text: userMessage,
      roomname: Rooms.currentRoom
    };

    Parse.create(message);
  }

};
