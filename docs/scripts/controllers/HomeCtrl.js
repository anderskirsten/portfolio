(function() {
    function HomeCtrl($scope) {
      var home = this;

      // nav menu is closed on init
      $scope.openMenu = false;

      // art credit is hidden on init
      $scope.artCredit = false;

      home.toggleArtCredit = function() {
        if($scope.artCredit) {
          $scope.artCredit = false;
        } else {
          $scope.artCredit =true;
        }
      };

    }

    angular
        .module('portfolio')
        .controller('HomeCtrl', ['$scope', HomeCtrl]);
})();
