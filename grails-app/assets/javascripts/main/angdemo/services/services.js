'use strict';

function AngdemoService(CrudServiceFactory) {
    return CrudServiceFactory('/api/angdemo');
}

angular.module('main.angdemo.services', ['ui.bootstrap'])

.factory('AngdemoService', AngdemoService)

.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

})

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})

.controller( 'Myngrest', function ($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
})

.controller('TooltipDemoCtrl', function ($scope, $sce) {
   $scope.dynamicTooltip = 'Hello, World from the controller $scope.dynamicTooltip model !';
   $scope.dynamicTooltipText = 'Dynamic Tooltip Text here (in the controller!)';
   $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
   $scope.placement = {
      options: [
         'top',
         'top-left',
         'top-right',
         'bottom',
         'bottom-left',
         'bottom-right',
         'left',
         'left-top',
         'left-bottom',
         'right',
         'right-top',
         'right-bottom'
      ],
      selected: 'top'
   };
})

.controller('TabsDemoCtrl', function ($scope, $window) {
     $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
                { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
       ];

         $scope.alertMe = function() {
                setTimeout(function() {
                         $window.alert('You\'ve selected the alert tab!');
                             });
                  };

           $scope.model = {
                  name: 'Tabs'
                       };
})

.controller('RatingDemoCtrl', function ($scope) {
   $scope.rate = 7;
   $scope.max = 10;
   $scope.isReadonly = false;

   $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
   };

   $scope.ratingStates = [
   {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
   {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
      {stateOn: 'glyphicon-heart'},
      {stateOff: 'glyphicon-off'}
   ];
})

.controller('DatepickerDemoCtrl', function ($scope) {
   $scope.today = function() {
      $scope.dt = new Date();
   };
   $scope.today();

   $scope.clear = function() {
      $scope.dt = null;
   };

   $scope.disabled = function(date, mode) {
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
   };

   $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
   };

   $scope.toggleMin();
   $scope.maxDate = new Date(2020, 5, 22);

   $scope.open1 = function() {
      $scope.popup1.opened = true;
   };

   $scope.open2 = function() {
      $scope.popup2.opened = true;
   };

   $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
   };

   $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
   };

   $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
   $scope.format = $scope.formats[0];
   $scope.altInputFormats = ['M!/d!/yyyy'];

   $scope.popup1 = {
      opened: false
   };

   $scope.popup2 = {
      opened: false
   };

   var tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);
   var afterTomorrow = new Date();
   afterTomorrow.setDate(tomorrow.getDate() + 1);
   $scope.events =
      [
      {
         date: tomorrow,
         status: 'full'
      },
      {
         date: afterTomorrow,
         status: 'partially'
      }
      ];

      $scope.getDayClass = function(date, mode) {
         if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
               var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

               if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
               }
            }
         }

         return '';
      };
}) 

console.log('services.js load complete');

