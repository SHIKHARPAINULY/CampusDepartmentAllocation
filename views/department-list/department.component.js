'use strict';

angular.module('firstAngularApp').component('departmentist', {
    templateUrl:'views/department-list/department.component.html',
    controller: function($scope){
        $scope.department = [ 'MECHANICAL', 'COMPUTER' , 'ELECTRICAL', 'CIVIL' , 'PHYSICS', 'CHEMISTRY','MATHEMATICS', 'BIOLOGY' , 'ELECTRONICS', 'GEOLOGY' , 'GEOGRAPHY', 'ECONOMICS' ]
    }
});