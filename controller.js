var app = angular.module('firstAngularApp' , ['ngMaterial', 'ui.router']);

app.controller('mainCtrl' , function($scope, $mdDialog) {

  // Data related to the students & the departments in college
  $scope.ShowStudent = 'false';
  $scope.ShowDepartment = 'false';
  $scope.department = [ 'MECHANICAL', 'COMPUTER' , 'ELECTRICAL', 'CIVIL'  ,'ELECTRONICS' ]
  $scope.students = [ 'Brandy' , 'Aaron', 'Jack' , 'Kate' , 'Deshmond' , 'Hurlley' , 'Charlie' , 'Walt', 'Tony' ];

    // Dialog Modal 
    $scope.showDeaprtment = function(ev) {
      $scope.ShowStudent = 'false';
      $scope.ShowDepartment = 'true';
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/ng-popUp/depttModal.html' ,
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:false,
        });
      };

      $scope.showStudent = function(ev) {
        $scope.ShowStudent = 'true';
        $scope.ShowDepartment = 'false';
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/ng-popUp/studentModal.html' ,
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:false,
        });
      };

      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
      }

      $scope.allocate = function(ev){
        console.log(ev.target.innerHTML);
      }
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home' , {
    url:'/',
    templateUrl:'views/home.html'
  }).state('depart' , {
    url:'/depart',
    templateUrl:'views/1.6/mainView.html'
  })

  allocateDepartment =  function ($scope){
    console.log('department');
  }
});