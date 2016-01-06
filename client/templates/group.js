Template.group.events({
  'submit #joinGroup': function (event) {
    event.preventDefault();
    var groupid = event.target.groupid.value;
    Meteor.call('joinGroup', groupid);

    Session.set('activeGroup', groupid);
    
    Router.go('/');
  },

  'submit #newGroup': function (event) {
    event.preventDefault();
    var name = event.target.groupname.value;
    var member = Meteor.userId();
    var i,a;

    Meteor.call('newGroup', name, member);

    Pod.find({owner: Meteor.userId(), group_name: name}).map(function (x) {
      i = x.group_id;
    }); // this doesnt work...

    Session.set('activeGroup', i);
    Session.set('activeGroupName', name);

    Router.go('/');
  },

  'click #back': function (event) {
    event.preventDefault();
    Router.go('/');
  },
});