Template.group_id.events({

  'click .list': function() {
    Session.set('activeGroup', this.group_id);
    Session.set('activeGroupName', this.group_name);
    $('.group').removeClass("color");
    $('#'+this.group_id).addClass("color");
  }

});