var app = app || {};

$(function() {
  new app.RecordLibraryView();
});

// var Router = Backbone.Router.extend({
//   routes: {
//     '': 'home'
//   }
// });

// var recordView = new app.RecordView();

// var router = new Router();
// router.on('route:home', function() {
//   recordView.render();
//   console.log("HERE");
// });

// Backbone.history.start();