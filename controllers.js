forecaster.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
	
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.daysList = [1, 2, 3, 4, 5, 6, 7];
  $scope.days = 6;

  $scope.tempUnitList = ['Fahrenheit', 'Celsius', 'Kelvin'];
  $scope.tempUnit = 'Fahrenheit';
	
	$scope.submit = function(tempUnit, days) {
		$location.path('/forecast' + '/' + $scope.tempUnit + '/' + $scope.days);
	};
	
}]);


forecaster.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

  $scope.city = cityService.city;

  $scope.days = parseInt($routeParams.days, 10);

  $scope.tempUnit = $routeParams.tempUnit;

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

  $scope.weatherResult = $scope.weatherAPI.get( { 
    APPID: 'c4aef95a396316e6406582b80b0fa54e',
    q: $scope.city, cnt: $scope.days,
  });

  $scope.daysList = [1, 2, 3, 4, 5, 6, 7];
  $scope.tempUnitList = ['Fahrenheit', 'Celsius', 'Kelvin'];

  $scope.convertDate = function(dt) { 
    return new Date(dt * 1000);
  }

  $scope.convertTemperature = function(temperatureForecast) {
    if ($routeParams.tempUnit === 'Fahrenheit') {
      return Math.round(temperatureForecast * (9/5) - 459.67) + "° F";
    } else if ($routeParams.tempUnit === 'Celsius') {
      return Math.round(temperatureForecast - 273.15) + "° C";
    } else
      return Math.round(temperatureForecast) + "° K";
  }
	
	$scope.status = {
		isAllOpen: true,
	}
	
}]);
