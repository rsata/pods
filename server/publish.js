Meteor.publish("indivpot", function () {
  return IndividualPot.find();
});

Meteor.publish("paymentgroup", function () {
  return Group.find();
});

Meteor.publish("pod", function () {
  return Pod.find();
});
