var MessagesView = {
  // ultimately used to display messages to user

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(App.stopSpinner);

    MessagesView.$chats.on('click', '.username', function() {
      // saves the specific username they clicked on
      var usernameClicked = $(this).text();

      // passes that into the toggleStatus
      Friends.toggleStatus(usernameClicked);
    });

  },

  renderMessage: function(message) {
    var htmlMessage = MessageView.render(message);
    MessagesView.$chats.append(htmlMessage);
  }

  //add a friend function here

};

