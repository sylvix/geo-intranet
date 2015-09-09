Meteor.publish("geoObjects", function () {
    return GeoObjects.find({});
});