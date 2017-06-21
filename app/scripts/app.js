(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
             .html5Mode({
                enabled: true,
                requireBase: false
             });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })

          $stateProvider
              .state('about', {
                  url: '/about',
                  controller: 'HomeCtrl as home',
                  templateUrl: '/templates/about.html'
              })

          $stateProvider
              .state('projects', {
                  url: '/projects',
                  controller: 'ProjectCtrl as projects',
                  templateUrl: '/templates/projects.html'
              });
    }

          angular
            .module('portfolio', ['ui.router', 'ui.bootstrap'])
            .config(config);
})();
