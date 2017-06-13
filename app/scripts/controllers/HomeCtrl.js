(function() {
    function HomeCtrl($scope) {
        // nav menu is closed on init
        $scope.openMenu = false;
    }

    angular
        .module('portfolio')
        .controller('HomeCtrl', ['$scope', HomeCtrl]);
})();
