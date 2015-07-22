var app = app || {};

app.RecordView = Backbone.View.extend({
  tagName: 'div',
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
  },

  showEdit: function() {
    this.$('#editForm').slideToggle();
  },

  render: function() {
    //this.el is what we defined in tagName. use $el to get access to jQuery html() function
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});