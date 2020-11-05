var DemoApp = angular.module('DemoApp', ['dx']);

var getLocations = function(date) {
    var timeZones = DevExpress.utils.getTimeZones(date);
    return timeZones.filter(function(timeZone) {
        return this.locations.indexOf(timeZone.id) !== -1;
    });
};

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.currentDate = new Date(2021, 4, 25);
    $scope.demoLocations = getLocations(new Date(2021, 4, 25));
    $scope.currentLocation = $scope.demoLocations[0].id;

    $scope.schedulerOptions = {
        bindingOptions: {
            timeZone: "currentLocation"
        },
        dataSource: data,
        views: ["workWeek"],
        currentView: "workWeek",
        currentDate: new Date(2021, 4, 25),
        height: 600,
        startDayHour: 8,
        onOptionChanged: function(e) {
            if(e.name === 'currentDate') {   
                $scope.demoLocations = getLocations(e.value);
            }
        },
        onAppointmentFormOpening: function(e) {
            var form = e.form;

            var startDateTimezoneEditor = form.getEditor('startDateTimeZone');
            var endDateTimezoneEditor = form.getEditor('endDateTimeZone');
            var startDateDataSource = startDateTimezoneEditor.option('dataSource');
            var endDateDataSource = endDateTimezoneEditor.option('dataSource');

            startDateDataSource.filter(['id', 'contains', 'Europe']);
            endDateDataSource.filter(['id', 'contains', 'Europe']);

            startDateDataSource.load();
            endDateDataSource.load();
        },
        editing: {
            allowTimeZoneEditing: true
        }
    };

    $scope.locationSwitcherOptions = {
        bindingOptions: {
            value: "currentLocation",
            items: 'demoLocations'
        },
        displayExpr: "title",
        valueExpr: "id",
        width: 240
    };
});
