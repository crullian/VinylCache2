var app = app || {};
// $(function() {
//   new app.RecordList();
// });

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
});

var recordList = new app.RecordList();

var router = new Router();
router.on('route:home', function() {
  recordList.render();
});

Backbone.history.start();