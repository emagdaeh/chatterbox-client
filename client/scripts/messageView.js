var MessageView = {

  // turn indv message into DOM element
  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div class="text"></div>
        <div class="roomname"></div>
      </div>
    `)
};