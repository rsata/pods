Meteor.subscribe('indivpot');
Meteor.subscribe('pod');

Template.index.helpers({
  useremail: function() {
    return Meteor.user().emails[0].address;
  },

  group: function() {
    return Pod.find({'members.member': Meteor.userId()});
  },

});

Template.index.events({
  'click #clear': function () {
    if (confirm("You are about to reset the count.  This action cannot be undone.  Continue?") === true) {
        Meteor.call('resetPot');
    } else {
        console.log('reset cancelled');
    }
  },

  'click #logout': function(event){
      event.preventDefault();
      Meteor.logout();
      Router.go('login');
  },

  'click #newgroup': function() {
    Router.go('/group');
  }
});

// On create group, set initial total variable to 0