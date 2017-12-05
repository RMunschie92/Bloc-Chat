(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getRoomById = function(roomId) {
      var query = ref.orderByChild('roomId').equalTo(roomId);
      Message.activeMessages = $firebaseArray(query);
      // console.log(activeMessages);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
