Template.appMap.rendered = function() {
    var map = L.map('map', {
        center: [42.87, 74.59],
        zoom: 12,
        zoomControl: false,
        minZoom: 12
    });

    L.tileLayer.provider('MapQuestOpen.OSM').addTo(map);
};