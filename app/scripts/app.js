(function() {
  function config($locationProvider, $stateProvider) {
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
      .state('menu', {
        url: '/menu',
        controller: 'MenuCtrl as menu',
        templateUrl: '/templates/menu.html'
      });
    $stateProvider
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: '/templates/about.html'
      });
    $stateProvider
      .state('follow', {
        url: '/follow',
        controller: 'FollowCtrl as follow',
        templateUrl: '/templates/follow.html'
      });
  }

  angular
    .module('saborLatino', ['ui.router'])
    .config(config);
})();
