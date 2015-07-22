var app = app || {};

app.RecordView = Backbone.View.extend({
  tagName: 'div', // defaults to div, just being explicit
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

  updateRecord: function(e) {
    e.preventDefault();

    var formData = {};
    $('#editForm').children('input').each(function(i, el) {

      formData[el.id] = $(el).val();

      $('#editForm').slideToggle();
    });
    this.model.save(formData); // put request
  },

  showEdit: function() {
    this.$('#editForm').slideToggle(150);
    $(".edit").text(function(i, text) {
      return text === "Edit" ? "Close" : "Edit";
    })
  },

  initialize: function() {
    this.model.on('change', this.render, this); // watch for a change and update the view
  },

  render: function() {
    //this.el is what we defined in tagName. use $el to get access to jQuery html() function
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});