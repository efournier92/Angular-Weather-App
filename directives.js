weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});

weatherApp.directive("weatherReportAccordion", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReportAccordion.html',
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@",
        }
    }
});
