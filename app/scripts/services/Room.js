(function() {
  function Room($firebaseArray, $cookies) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var cookieDisplay = $cookies.get('blocChatCurrentUser');

    Room.all = rooms;
    Room.cookies = cookieDisplay;

    Room.add = function() {
      Room.roomName = document.getElementById("newRoomName").value;
      var list = $firebaseArray(ref);
      list.$add({ $value: this.roomName  } ).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        list.$indexFor(id); // returns location in the array
      });
    }


    if ( !Room.cookies || Room.cookies == null || Room.cookies == undefined || Room.cookies == '') {
      Room.noCookies = true;
      Room.hideShow = 'disabled';
    } else {
      Room.noCookies = false;
      Room.hideShow = '';
      }


    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();
