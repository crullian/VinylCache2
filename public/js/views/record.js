var app = app || {};

app.RecordView = Backbone.View.extend({
  tagName: 'div',
  // className: 'record',
  template: _.template($('#record-list-template').html()),

  events: {
    'click .delete': 'deleteBook'
  },

  deleteBook: function() {
    this.model.destroy();
    this.remove();
  },

  // edit: function() {

  // },

  render: function() {
    console.log("RENDERER")
      //this.el is what we defined in tagName. use $el to get access to jQuery html() function
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});