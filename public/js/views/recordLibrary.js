var app = app || {};

app.RecordList = Backbone.View.extend({
  el: '.col-md-8',
  render: function() {
    var that = this;
    var recordLibrary = new app.RecordLibrary();
    recordLibrary.fetch({
      success: function(records) {
        var template = _.template($('#record-list-template').html(), {
          records: records.models
        });
        that.$el.html(template);
      }
    })
  }
});