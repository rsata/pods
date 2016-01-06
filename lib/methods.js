Meteor.methods({

  resetPot: function() {
    IndividualPot.remove({});
  },

  makePayment: function (paymentAmount) { //change name
    var person = IndividualPot.findOne({owner: this.userId});
    if (person === undefined) {
      IndividualPot.insert({
        payment: Number(paymentAmount),
        date: new moment().format('MMM Do, YYYY, h:mm:ss'),
        group: "group1", // need some sort of group ID, session.get the current group
        owner: Meteor.userId(),
      });
    } else {
      IndividualPot.update({owner : this.userId}, {
        $inc: {payment: Number(paymentAmount)}, 
        $set: {date: new moment().format('MMM Do, YYYY, h:mm:ss')}
      });
    }
  },

  newGroup: function (name, member) {
    id = Random.id([5]);
    Pod.insert({
      group_name: name,
      group_id: id,
      owner: Meteor.userId(),
      members: [
        {
          member: Meteor.userId(),
          amount: 0,
        }
      ],
    });
  },


  joinGroup: function (groupid) {
    Pod.update(
      {group_id: groupid},
      {$push: 
        {
          members: {
            member: Meteor.userId(),
            amount: 0,
          }
        }
      }
    );
  },

  addToPod: function (activeGroup, peas) {
    Pod.update(
      {group_id: activeGroup, 'members.member': Meteor.userId()},
      {$inc: {'members.$.amount': Number(peas)}}
    );
  }
});


