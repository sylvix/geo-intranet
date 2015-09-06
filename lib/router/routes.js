FlowRouter.route('/', {
    name: "home",
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appHome"
        });
    }
});

FlowRouter.route('/private', {
    name: "private",
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render('masterLayout', {
            main: "appPrivate"
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