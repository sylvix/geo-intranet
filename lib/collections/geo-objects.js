GeoObjects = new Mongo.Collection('geoObjects');

GeoObjects.OBJECT_TYPES = [
    "Establishment",
    "Transport",
    "Nature",
    "Territory",
    "Infrastructure",
    "Person",
    "Undefined"
];

var GeoObjectsSchema = new SimpleSchema({
    type: {
        type: String,
        label: "Type",
        allowedValues: GeoObjects.OBJECT_TYPES
    },
    geo: {
        type: Object,
        label: "Geo Location"
    },
    "geo.coordinates": {
        type: [Number],
        minCount: 2,
        maxCount: 2,
        decimal: true
    },
    title: {
        type: String,
        label: "Title"
    },
    danger_level: {
        type: Number,
        label: "Danger level",
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