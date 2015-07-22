var app = app || {};

app.RecordView = Backbone.View.extend({
  tagName: 'div', // defaults to div, just being explicit
  // className: 'record',
  template: _.template($('#record-list-template').html()),

  events: {
    'click .delete': 'deleteRecord',
    'click .update': 'updateRecord',
    'click .edit': 'showEdit'
  },

  deleteRecord: function() {
    this.model.destroy();
    this.remove();
  },

  updateRecord: function() {
    // this.model.create();
    this.$('#editForm').slideToggle(400);
  },

  showEdit: function() {
    this.$('#editForm').slideToggle(100);
  },

  render: function() {
    //this.el is what we defined in tagName. use $el to get access to jQuery html() function
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});