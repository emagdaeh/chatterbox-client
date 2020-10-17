var MessageView = {

  // elsewhere in code, need to loop over data array we get back from the fetch func and call escapeData and render on each message obj


  // turn indv message into DOM element
  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->
    `)
};

// function to handle characters we need to escape
String.prototype.escape = function() {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };
  return this.replace(/[&<>]/g, function(tag) {
    return tagsToReplace[tag] || tag;
  });
};