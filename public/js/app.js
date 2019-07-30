(function() {
  angular.module("zareApp", ["ui.router"]).config(MainRouter);

  MainRouter.$inject = [
    "$stateProvider",
    "$urlRouterProvider",
    "$locationProvider"
  ];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "home.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "about.html"
      })
      .state("work", {
        url: "/work",
        templateUrl: "work.html"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "contact.html"
      })
      .state("job-trail", {
        url: "/projects/job-trail",
        templateUrl: "projects/job-trail.html"
      })
      .state("black-jack", {
        url: "/projects/black-jack",
        templateUrl: "projects/black-jack.html"
      })
      .state("shopmate", {
        url: "/projects/shopmate",
        templateUrl: "projects/shopmate.html"
      })
      .state("goal-digger", {
        url: "/projects/goal-digger",
        templateUrl: "projects/goal-digger.html"
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
