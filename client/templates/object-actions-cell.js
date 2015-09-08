Template.objectActionsCell.events({
    'click .edit-object-btn': function () {
        Session.set('selectedObjectId', this._id);
        $("#objectFormModal").modal('show');
    },
    'click .remove-object-btn': function () {
        GeoObjects.remove(this._id);
    }
});