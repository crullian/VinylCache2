var app = app || {};

app.RecordLibrary = Backbone.Collection.extend({
  model: app.RecordModel,
  url: '/api/records'
});