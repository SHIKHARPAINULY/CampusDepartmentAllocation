var app = angular.module('firstAngularApp' , ['ngMaterial', 'ui.router']);

app.controller('mainCtrl' , function($scope, $mdDialog) {

  // Data related to the students & the departments in college
  $scope.ShowStudent = 'false';
  $scope.ShowDepartment = 'false';
  $scope.department = [ 'MECHANICAL', 'COMPUTER' , 'ELECTRICAL', 'CIVIL'  ,'ELECTRONICS' ]
  $scope.students = [ 'Brandy' , 'Aaron', 'Jack' , 'Kate' , 'Deshmond' , 'Hurlley' , 'Charlie' , 'Walt', 'Tony' ];
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home' , {
    url:'/',
    templateUrl:'views/home.html'
  }).state('depart' , {
    url:'/depart',
    templateUrl:'views/components/mainView.html'
  })

  allocateDepartment =  function ($scope){
    console.log('department');
  }
});