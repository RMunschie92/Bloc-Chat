(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      var list = $firebaseArray(ref);
      list.$add({ $value: "room"} ).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        list.$indexFor(id); // returns location in the array
      });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', '$firebaseObject', Room]);
})();
