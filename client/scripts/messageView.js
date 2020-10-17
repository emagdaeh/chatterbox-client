var MessageView = {

  // turn indv message into DOM element
  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
        <div class="roomname"><%= roomname %></div>
      </div>
    `)
};