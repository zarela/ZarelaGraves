(function(){
  angular.module('MySite', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider){

  $stateProvider
  // .state('home', {
  //   url: '/',
  //   templateUrl: "home.html",
  // })
  // .state('about', {
  //   url: '/about',
  //   templateUrl: "about.html"
  // })

  $urlRouterProvider.otherwise('/')
  // $locationProvider.html5Mode({
  //  enabled: true,
  //  requireBase: false,
  //  rewriteLinks: true
  // });

  }; //end of routes
})();
