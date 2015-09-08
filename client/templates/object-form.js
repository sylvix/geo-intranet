AutoForm.addHooks('addGeoObjectForm', {
    onSuccess: function() {
        $("#objectFormModal").modal('hide');
    }
});

Template.objectForm.helpers({
    selectedObject: function() {
        return GeoObjects.findOne(Session.get("selectedObjectId"));
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