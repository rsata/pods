Template.pod.helpers({
  GroupName: function () {
    return Session.get('activeGroupName');
  },

  groupID: function () {
    return Session.get('activeGroup')
  },

  sum: function () {
    var active = Session.get('activeGroup');
    var membercount, c=0, s=0, a;
    
    a = Pod.find({group_id: active}).map(function (x) {
      membercount = x.members.length;
      for (c=0; c<membercount; c++) {
        s = s + x.members[c].amount;
      }
      return s;
    });
    return s;
  },

  indiv: function () {
    var active = Session.get('activeGroup');
    var membercount, c=0, flag, indiv;
    
    indiv = Pod.find({group_id: active}).map(function (x) {
      membercount = x.members.length;
      for (c=0; c<membercount; c++) {
        if (x.members[c].member === Meteor.userId()) {
          flag = c;
        }        
      }
      return x.members[flag].amount;
    });
    return indiv;
  },

  owe: function () {
    var active = Session.get('activeGroup');

    var amountpaid, amountowed, totalpod=0, c=0, c2=0, flag, membercount, h;

    Pod.find({group_id: active}).map(function (x) {
      membercount = x.members.length;
      
      for (c=0; c<membercount; c++) {
        totalpod = totalpod + x.members[c].amount;
      }

      for (c2=0; c2<membercount; c2++) {
        if (x.members[c2].member === Meteor.userId()) {
          flag = c2;          
        }
      }
      amountpaid = x.members[flag].amount;
      amountowed = (totalpod/membercount)-amountpaid;
    });
    return amountowed;
  },


});

Template.pod.events({
  'submit #addMoney': function (event) {
    event.preventDefault();
    var peas = event.target.money.value;
    var activeGroup = Session.get('activeGroup');

    Meteor.call('addToPod', activeGroup, peas);

    console.log(peas);
    a="";
    event.target.money.value = a;
  }
});