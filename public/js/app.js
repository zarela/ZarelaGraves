(function(){
  angular
  .module('zareApp', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "home.html",
  })
  .state('about', {
    url: '/about',
    templateUrl: "about.html"
  })
  .state('work', {
    url: '/work',
    templateUrl: "work.html"
  })
  .state('contact', {
    url: '/contact',
    templateUrl: "contact.html"
  })

  $urlRouterProvider.otherwise('/')

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }; //end of routes
})();
