(function() {
  function HomeCtrl(Room) {
    this.chatRooms = Room.all;
    console.log(this.chatRooms);
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
