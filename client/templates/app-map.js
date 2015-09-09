var MAP_ID = 'map';

Meteor.startup(function() {
    $(window).resize(function() {
        $('#' + MAP_ID).css('height', window.innerHeight - 80);
    });
});

var Places = function() {
    this.markers = {};
    this.layerGroups = {};
};

Places.prototype.setMap = function(map) {
    this.map = map;
};

Places.prototype.createMarker = function(data) {
    var marker = L.marker(data.geo.coordinates);
    marker.data = data;

    return marker;
};

Places.prototype._addMarkerToLayerGroup = function(marker, layerGroupName) {
    if (!this.layerGroups[layerGroupName]) {
        this.layerGroups[layerGroupName] = L.layerGroup();
        this.enableLayerGroup(layerGroupName);
    }

    this.layerGroups[layerGroupName].addLayer(marker);
};

Places.prototype.addMarker = function(data) {

    var marker = this.createMarker(data);
    marker.data = data;

    marker.on("click", function(event) {
        console.log("it was clicked");
    }.bind(this));

    this.markers[data._id] = marker;

    this._addMarkerToLayerGroup(marker, data.type);
};

Places.prototype.updateMarker = function(data) {
    var marker = this.markers[data._id];
    marker.data = data;
    marker.setLatLng(data.geo.coordinates);
    marker.update();
};

Places.prototype.deleteMarker = function(id) {
    var marker = this.markers[id];
    var layerGroup = this.layerGroups[marker.data.type];

    if (layerGroup.hasLayer(marker)) {
        layerGroup.removeLayer(marker);
    }
};

Places.prototype.enableAllLayerGroups = function() {
    for (var name in this.layerGroups) {
        if (this.layerGroups.hasOwnProperty(name)) this.enableLayerGroup(name);
    }
};

Places.prototype.disableAllLayerGroups = function() {
    for (var name in this.layerGroups) {
        if (this.layerGroups.hasOwnProperty(name)) this.disableLayerGroup(name);
    }
};

Places.prototype.disableLayerGroup = function(name) {
    if (this.layerGroups.hasOwnProperty(name) && this.map.hasLayer(this.layerGroups[name])) {
        this.map.removeLayer(this.layerGroups[name]);
    }
};

Places.prototype.enableLayerGroup = function(name) {
    if (this.layerGroups.hasOwnProperty(name) && !this.map.hasLayer(this.layerGroups[name])) {
        this.map.addLayer(this.layerGroups[name]);
    }
};


Template.appMap.rendered = function() {
    $(window).resize(); // trigger resize event

    L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

    var map = L.map(MAP_ID, {
        center: [42.87, 74.59], // center map on Bishkek city
        zoom: 12,
        doubleClickZoom: false,
        zoomControl: false,
        minZoom: 12
    });

    L.tileLayer.provider('MapQuestOpen.OSM').addTo(map);
    new L.Control.Zoom({ position: 'topright' }).addTo(map);

    Meteor.subscribe('geoObjects');

    var places = new Places();
    places.setMap(map);

    var query = GeoObjects.find();
    query.observe({
        added: function (document) {
            places.addMarker(document);
        },
        changed: function(newDocument, oldDocument) {
            places.updateMarker(newDocument);
        },
        removed: function (oldDocument) {
            places.deleteMarker(oldDocument._id);
        }
    });


    map.on('dblclick', function(event) {
        Session.set('selectedObjectId', false);
        Session.set('selectedCoordinates', event.latlng);
        $('#objectFormModal').modal('show');
    });

    $('#objectFormModal').on('hide.bs.modal', function (e) {
        Session.set('selectedCoordinates', false);
    });

    $('#filters').on('change', 'input', function() {
        var $this = $(this);
        var enabledFiltersNumber = $('#filters').find("input[type='checkbox']:checked").length;
        var layerGroupName = $this.val();

        if ($this.is(":checked")) {
            if (enabledFiltersNumber == 1) {
                places.disableAllLayerGroups();
            }
            places.enableLayerGroup(layerGroupName);
        } else {
            if (enabledFiltersNumber == 0) {
                places.enableAllLayerGroups();
            } else {
                places.disableLayerGroup(layerGroupName);
            }
        }
    });
};

Template.appMap.helpers({
    types: function() {
        return GeoObjects.OBJECT_TYPES;
    }
});
