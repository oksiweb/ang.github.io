(function(){
    'use strict'
    angular.module("LunchCheck",[]).controller("MyController", MyController);
    MyController.$inject = ['$scope'];

    function MyController($scope){

      $scope.items = "";
      $scope.showMessage = function(){
          if($scope.items == "") {
               return $scope.message = "Please enter data first";
          };
          var result = $scope.items.split(",");
          $scope.test = result;
          if(result.length > 0 && result.length<4){
            $scope.message = "Enjoy";
          }else if(result.length > 3){
            $scope.message = "Too much";
          }

      };
    }

})();