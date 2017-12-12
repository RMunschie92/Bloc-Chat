(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.targetRoom = ''

    Message.getRoomById = function(roomId) {
      var query = ref.orderByChild('roomId').equalTo(roomId);
      Message.activeMessages = $firebaseArray(query);
      Message.targetRoom = roomId;
    };

    Message.messageFieldClass = 'hidden';

    Message.addZero = function(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    Message.sentAt = function() {
      var time = new Date();
      var hours = Message.addZero(time.getHours());
      var minutes = Message.addZero(time.getMinutes());
      return hours + ':' + minutes;
    };

    Message.send = function(newMessage) {
      // 1. Target input field in new-message-content
      Message.newMessageContent = document.getElementById('new-message-content').value;
      // get length of messages query to generate new message $ids
      Message.queryLength = Message.activeMessages.length;
      // 2. Associate with active room
      Message.activeMessages.$add({
        content: Message.newMessageContent,
        roomId: Message.targetRoom,
        sentAt: Message.sentAt(),
        username: $cookies.get('blocChatCurrentUser')
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
