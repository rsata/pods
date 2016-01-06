Router.route ('/', function () {
  this.render('index');
});

Router.route ('/login', function () {
  this.render('login');
});

Router.route ('/group', function () {
  this.render('group');
});

Router.route ('/selectgroup', function () {
  this.render('selectgroup');
});