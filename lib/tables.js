TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.GeoObjects = new Tabular.Table({
    name: "GeoObjectList",
    collection: GeoObjects,
    columns: [
        {data: "type", title: "Type"},
        {data: "title", title: "Title"},
        {data: "danger_level", title: "Danger level"},
        {data: "description", title: "Description"},
        {data: "geo.coordinates", title: "Geo Location"},
        {title: "Actions", tmpl: Meteor.isClient && Template.objectActionsCell}
    ]
});