AutoForm.addHooks('addGeoObjectForm', {
    onSuccess: function() {
        $('#addObjectModal').modal('hide');
    }
});