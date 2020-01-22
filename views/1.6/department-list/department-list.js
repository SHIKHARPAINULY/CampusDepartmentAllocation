'use strict';

angular.module('firstAngularApp').directive('departmentList', function(){
    return { 
        restrict:'E',
        templateUrl:'views/1.6/department-list/department-list.html',
        scope : {
            name: '<'
        },
        link: function(scope, elem , attrs  ) {
            scope.department = [ 'MECHANICAL', 'COMPUTER' , 'ELECTRICAL', 'CIVIL'  ,'ELECTRONICS' ]
            console.log('name--sp :', attrs.name);
        } 
    }
});