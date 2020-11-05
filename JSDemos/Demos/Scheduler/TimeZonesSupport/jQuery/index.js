$(function () {
    var currentDate = new Date(2021, 4, 25);

    var getLocations = function(date) {
        var timeZones = DevExpress.utils.getTimeZones(date);
        return timeZones.filter(function(timeZone) {
            return locations.indexOf(timeZone.id) !== -1;
        });
    };

    var demoLocations = getLocations(currentDate);

    var scheduler = $("#scheduler").dxScheduler({
        dataSource: data,
        views: ["workWeek"],
        timeZone: demoLocations[0].id,
        currentView: "workWeek",
        currentDate: currentDate,
        startDayHour: 8,
        height: 600,
        editing: {
            allowTimeZoneEditing: true
        },
        onOptionChanged: function(e) {
            if(e.name === 'currentDate') {                        
                locationSwitcher.option('items', getLocations(e.value));
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
        }
    }).dxScheduler("instance");

    var locationSwitcher = $("#location-switcher").dxSelectBox({
        items: demoLocations,
        displayExpr: "title",
        valueExpr: "id",
        width: 240,
        value: demoLocations[0].id,
        onValueChanged: function(data) {
            scheduler.option("timeZone", data.value);
        }
    }).dxSelectBox('instance');
});
