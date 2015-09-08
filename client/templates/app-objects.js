Template.appObjects.events({
    'click .create-object-btn': function() {
        Session.set('selectedObjectId', false);
        $("#objectFormModal").modal('show');
    }
});