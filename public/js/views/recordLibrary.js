var app = app || {};

app.RecordLibraryView = Backbone.View.extend({
  el: '.col-md-8',

  initialize: function() {
    this.collection = new app.RecordLibrary();
    this.collection.fetch({
      reset: true
    })
    this.render();

    // this.listenTo(this.collection, 'add', this.renderRecord);
    this.listenTo(this.collection, 'reset', this.render);
  },

  // render record library by rendering each record in its collection
  render: function() {
    this.collection.each(function(item) {
      this.renderRecord(item);
    }, this);
  },

  // render: function() {
  //   var that = this;
  //   var recordLibrary = new app.RecordLibrary();
  //   recordLibrary.fetch({
  //     success: function(records) {
  //       var template = _.template($('#record-list-template').html(), {
  //         records: records.models
  //       });
  //       that.$el.html(template);
  //     }
  //   })
  // }

  // render a record by creating a RecordView and appending the
  // element it renders to the library's element
  renderRecord: function(item) {
    var recordView = new app.RecordView({
      model: item
    });
    this.$el.append(recordView.render().el);
  },
});