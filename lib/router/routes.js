FlowRouter.route('/', {
    name: "home",
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appHome"
        });
    }
});

FlowRouter.route('/objects', {
    name: "objects",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appObjects"
        });
    }
});

FlowRouter.route('/objects/new', {
    name: "new_object",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appNewObject"
        });
    }
});

FlowRouter.route('/map', {
    name: "map",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appMap"
        });
    }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('masterLayout', {
            main: "pageNotFound"
        });
    }
};

//AT Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');