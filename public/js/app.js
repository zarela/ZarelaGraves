(function(){
  angular.module('my-site')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "home.html",
  })

  $urlRouterProvider.otherwise('/')
  // $locationProvider.html5Mode({
  //  enabled: true,
  //  requireBase: false,
  //  rewriteLinks: true
  // });

  }; //end of routes
})();
