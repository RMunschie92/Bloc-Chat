(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    console.log(ref.toString());
    // Message.activeMessages = messages;

    Message.getRoomById = function(roomId) {
      var query = ref.orderByChild('roomId').equalTo(roomId);
      console.log(query.toString());
      // console.log(messages);
    };



    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
