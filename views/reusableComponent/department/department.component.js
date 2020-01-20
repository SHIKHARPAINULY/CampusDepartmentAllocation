'use strict';

angular.module('firstAngularApp').component('departmentList', {
    templateUrl:'views/reusableComponent/department/department.component.html',
    controller: function($scope){
        $scope.department = [ 'MECHANICAL', 'COMPUTER' , 'ELECTRICAL', 'CIVIL' , 'PHYSICS', 'CHEMISTRY','MATHEMATICS', 'BIOLOGY' , 'ELECTRONICS', 'GEOLOGY' , 'GEOGRAPHY', 'ECONOMICS' ]
        $scope.students = [ 'Jonathan', 'Nathan', 'Chris', 'Brian', 'Timothy', 'Brandy' , 'Aaron', 'Jack' , 'Kate' , 'Deshmond' , 'Hurlley' , 'Charlie' , 'Walt', 'Tony' ];

    }
});