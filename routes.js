weatherApp.config(function($routeProvider) {
                  
    $routeProvider
                  
    .when ('/', {
       templateUrl: 'pages/home.html',
       controller: 'homeController'
    })

    .when ('/forecast/:tempUnit/:days', {
       templateUrl: 'pages/forecast.html',
       controller: 'forecastController'
    })

});
