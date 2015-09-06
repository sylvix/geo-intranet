GeoObjects = new Mongo.Collection('geoObjects');

var GeoObjectsSchema = new SimpleSchema({
    type: {
        type: String,
        label: "Type",
        allowedValues: ["Type1", "Type2"]
    },
    title: {
        type: String,
        label: "Title"
    },
    danger_level: {
        type: Number,
        label: "Number",
        min: 0,
        max: 10
    },
    description: {
        type: String,
        label: "Description",
        optional: true
    }
});

GeoObjects.attachSchema(GeoObjectsSchema);