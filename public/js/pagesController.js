(function(){
  angular.module('MySite')
  .controller('PagesController', PagesController);

  PagesController.$inject = ['$http'];

  function PagesController($http){
    var self = this;
    self.all = [];

  }
})()
