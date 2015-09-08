var MAP_ID = 'map';

Meteor.startup(function() {
    $(window).resize(function() {
        $('#' + MAP_ID).css('height', window.innerHeight - 80);
    });
});

Template.appMap.rendered = function() {
    $(window).resize(); // trigger resize event

    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

    var map = L.map(MAP_ID, {
        center: [42.87, 74.59], // center map on Bishkek city
        zoom: 12,
        doubleClickZoom: false,
        minZoom: 12
    });

    L.tileLayer.provider('MapQuestOpen.OSM').addTo(map);

    map.on('dblclick', function(event) {
        Session.set('selectedObjectId', false);
        Session.set('selectedCoordinates', event.latlng);
        $('#objectFormModal').modal('show');
    });

    $('#objectFormModal').on('hide.bs.modal', function (e) {
        //Session.set('selectedCoordinates', false);
    });
};
