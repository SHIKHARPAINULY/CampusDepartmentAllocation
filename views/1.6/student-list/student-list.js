'use strict';

angular.module('firstAngularApp').directive('StudentList', function(){
    return { 
        restrict:'E',
        templateUrl:'views/1.6/student-list/student-list.html',
        scope : {
            department: '<'
        },
        link: function(scope, elem , attrs  ) {
            console.log('name--sp :', attrs.department);
        } 
    }
});