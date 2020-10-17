var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();

    // call the message function
    FormView.handleMessageUserCreated();

    $('#message').val('');

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  // //create message function
  handleMessageUserCreated: function() {
    var userMessage = $('#message').val();
    // do something to escape submitted info for userMessage

    var message = {
      username: App.username,
      text: userMessage,
      roomname: null
    };

    console.log(message);
    Parse.create(message);
  }



  //add a friend function


  //create a room function

};
