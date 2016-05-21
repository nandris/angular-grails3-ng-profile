//= require_self
//= require_tree /main/core/directives/templates/buttons

'use strict';

function crudButton($state, FlashService) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
			label: '@',
            crudButton: '@',
            item: '=',
            isDisabled: '=',
            afterAction: '&'
        },
        link: function($scope) {
            var refreshFn = function () {
				$state.go('^.refresh');
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            var createFn = function () {
				$state.go('^.create');
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            var editFn = function () {
				$state.go('^.edit', {id: $scope.item.id});
                if ($scope.afterAction) {
                    $scope.afterAction();
                }
            };

            var saveFn = function () {
                var errorFunction = function(data) {
                    var messages = [];
                    angular.forEach(data.data.errors, function (error) {
                        messages.push(error.message);
                    });

                    FlashService.error(messages);
                };

                $scope.item.save().then(function(item) {
					$state.go('^.show', {id: item.id});
					if ($scope.afterAction) {
                    	$scope.afterAction();
					}
					var message = 'Item was successfully updated';
					FlashService.success(message, {routeChange: true});
                 },errorFunction);
            };

            var deleteFn = function () {
                var successFn = function() {
					var routeChange = (!$state.current.name.endsWith('.list'));
					
					if ($scope.afterAction) {
                		$scope.afterAction();
                	}
					if (routeChange) {
						$state.go('^.list');
					}

					var message = 'Item was successfully deleted';
                	FlashService.success(message, {routeChange: routeChange});					
				};

				var errorFn = function () {
					var message = "Couldn't delete item";
                	FlashService.error(message);
				};

				$scope.item.remove().then(successFn, errorFn);
            };

            $scope.onClick = function () {
                switch ($scope.crudButton) {
                    case "refresh" :
                        refreshFn();
                        break;
                    case "create" :
                        createFn();
                        break;
                    case "edit" :
                        editFn();
                        break;
                    case "delete" :
                        deleteFn();
                        break;
                    case "save" :
                        saveFn();
                        break;
                }
            }
        },
        templateUrl: function (element, attrs) {
            switch (attrs.crudButton) {
                case "refresh":
                    return "/main/core/directives/buttons/refresh-button.html";
                case "create":
                    return "/main/core/directives/buttons/create-button.html";
                case "edit":
                    return "/main/core/directives/buttons/edit-button.html";
                case "delete":
                    return "/main/core/directives/buttons/delete-button.html";
                case "save":
                    return "/main/core/directives/buttons/save-button.html";
            }

        }
    }
}

angular.module('main.core.directives.buttons', ['main.core.services'])
    .directive('crudButton', crudButton);

