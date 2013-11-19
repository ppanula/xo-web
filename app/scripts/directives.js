angular.module('xoWebApp').directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            console.log(attr);
            element.bind(attr.stopEvent, function (e) {
                e.stopPropagation();
            });
        }
    };
});