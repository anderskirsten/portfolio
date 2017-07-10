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
              })

          $stateProvider
              .state('blog-portal', {
                  url: '/blog-portal',
                  controller: 'BlogCtrl as blog',
                  templateUrl: '/templates/blog_portal.html'
              })

          $stateProvider
              .state('contact', {
                  url: '/contact',
                  controller: 'ContactCtrl as contact',
                  templateUrl: '/templates/contact.html'
              });
    }

          angular
            .module('portfolio', ['ui.router', 'ui.bootstrap'])
            .config(config);
})();
