var app = app || {};

app.RecordLibrary = Backbone.Collection.extend({
  url: '/api/records'
});