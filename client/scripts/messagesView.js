// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$chats.html('');
  },

  render: function(roomName) {
    //Clear chats dom to make sure no repeats
    this.$chats.html('');
    // TODO: Render _all_ the messages.
    let messages;
    if (roomName) {
      messages = Messages._data.filter((message) => {
        if(roomName === 'lobby' && message.roomname === null) {
          return true;
        }
        return message.roomname === roomName;
      });
    } else {
      messages = Messages._data
    }
    for (let i = 0 ; i < messages.length; i++) {
      this.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    let newMessage = MessageView.render(message);
    let $newMessage = $(newMessage);
    $newMessage.on('click', (event) => {
      this.handleClick(event, message.username);
    });
    this.$chats.append($newMessage);
  },

  handleClick: function(event, friendName) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(friendName);
  }

};