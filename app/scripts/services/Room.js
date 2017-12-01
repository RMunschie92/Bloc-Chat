(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function() {
      Room.roomName = document.getElementById("newRoomName").value;
      var list = $firebaseArray(ref);
      list.$add({ $value: this.roomName  } ).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        list.$indexFor(id); // returns location in the array
      });
    }

    console.log(Room.all);
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
})();
