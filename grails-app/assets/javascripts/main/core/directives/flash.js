//= require_self
//= require_tree /main/core/directives/templates

'use strict';

function flashMessage(FlashService) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {},
        link: function($scope) {
            $scope.getMessageClass = function(type) {
                switch(type) {
                    case FlashService.TYPE.ERROR:
                        return "alert-danger";
                    case FlashService.TYPE.WARN:
                        return "alert-warning";
                    default:
                        return "alert-" + type;
                }
            };

            $scope.isList = function(message) {
                return (message instanceof Array);
            };

            var loadMessage = function() {
				$scope.flash = FlashService.getMessage();
            };
			
		    $scope.$on('$destroy', function () {
				FlashService.clear();
			});

            $scope.$on('flash:messageChange', loadMessage);
			
			loadMessage();
        },
        templateUrl: '/main/core/directives/flash-message.html'
    }
}

angular.module('main.core.directives.flash', ['main.core.services'])
    .directive('flashMessage', flashMessage);
