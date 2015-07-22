var app = app || {};

app.RecordModel = Backbone.Model.extend({
  defaults: {
    artist: '',
    title: '',
    imgUrl: ''
  },

  idAttribute: '_id'
});