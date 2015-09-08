AutoForm.addHooks('addGeoObjectForm', {
    onSuccess: function() {
        $("#objectFormModal").modal('hide');
    }
});

Template.objectForm.helpers({
    selectedObject: function() {
        if (Session.get("selectedObjectId")) {
            return GeoObjects.findOne(Session.get("selectedObjectId"));
        } else if (Session.get("selectedCoordinates")) {
            var selectedCoordinates = Session.get("selectedCoordinates");
            return {geo: {coordinates: [selectedCoordinates.lat, selectedCoordinates.lng]}}
        } else {
            return false;
        }
    },
    formType: function() {
        if (Session.get("selectedObjectId")) {
            return "update";
        } else {
            return "insert";
        }
    },
    isInsert: function() {
        return !Session.get("selectedObjectId");
    }
});