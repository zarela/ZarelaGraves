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
      .state("btc-converter", {
        url: "/projects/btc-converter",
        templateUrl: "projects/btc-converter.html"
      })
      .state("black-jack", {
        url: "/projects/black-jack",
        templateUrl: "projects/black-jack.html"
      })
      .state("shopmate", {
        url: "/projects/shopmate",
        templateUrl: "projects/shopmate.html"
      })
      .state("vaccine-tracker", {
        url: "/projects/vaccine-trackerr",
        templateUrl: "projects/vaccine-tracker.html"
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
