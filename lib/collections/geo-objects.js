GeoObjects = new Mongo.Collection('geoObjects');

var OBJECT_TYPES = [
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
        allowedValues: OBJECT_TYPES,
        autoform: {
            afQuickField: {
                type: 'select'
            }
        }
    },
    geo: {
        type: Object,
        label: "Geo Location",
        optional: true  // Optional for dev. Will need to revert back to required.
    },
    "geo.coordinates": {
        type: [Number],
        minCount: 2,
        maxCount: 2,
        decimal: true,
        optional: true // Optional for dev. Will need to revert back to required.
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