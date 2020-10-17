var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // save the information user puts in form

    event.preventDefault();

    // call create func from parse.js on that message obj to send message to the server

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

  //create message function
  // turn user input into appropriate message obj
  // var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // };
  // do something to escape submitted info
  // Stop the browser from submitting the form


  //add a friend function


  //create a room function

};
