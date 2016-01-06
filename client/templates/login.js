Template.login.events({
  'submit form#login': function(event){
    event.preventDefault();
    var email = $('[name=loginemail]').val();
    var password = $('[name=loginpassword]').val();
    Meteor.loginWithPassword(email, password, function(error){
      if(error){
        alert(error.reason);
      } else {
        Router.go('/');
      }
    });
  },

  'submit form#createUser': function(event, error){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password,
    }, function(error) {
       if(error){
        alert(error.reason);
      } else {
        Router.go('/group');
      }
    });
  },

});