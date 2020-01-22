'use strict';


angular.module('firstAngularApp')
.component('studentList', {
    templateUrl : 'views/student-list/student.component.html',
    bindings: {
        user: '<',
    },
    controller: StudentListController
});

function StudentListController($scope, $element, $attrs) {
    // var ctrl = this;
     $scope.x = $attrs.user;
    console.log('user : ' ,$attrs.user);
    $scope.students = [ 'Jonathan', 'Nathan', 'Chris', 'Brian', 'Timothy', 'Brandy' , 'Aaron', 'Jack' , 'Kate' , 'Deshmond' , 'Hurlley' , 'Charlie' , 'Walt', 'Tony' ];

}