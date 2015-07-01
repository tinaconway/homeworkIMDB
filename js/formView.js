var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var PostModel = require('./movies');


module.exports = Backbone.View.extend({
    className: 'add',
    template: _.template($('#formTmpl').html()),
    initialize: function (options) {
      this.el = options.el;
    if(!this.model) {
      this.model = new PostModel();
    }
    this.render();
    },
    events: {
      "submit form": "addMovie"
    },
    render: function () {
      var myModel = this.model.isNew() ? {} : this.model.toJSON();
      myModel.isNew = this.model.isNew();
      var markup = this.template(myModel);
      this.$el.html(markup);
      return this;
    },
    addMovie: function() {
      event.preventDefault();
      this.model = new PostModel();
      console.log("working");
      this.model.set({
       title: this.$el.find('input[name="title"]').val(),
       released: this.$el.find('input[name="released"]').val(),
       cover: this.$el.find('input[name="cover"]').val(),
       plot: this.$el.find('textarea[name="plot"]').val(),
       rating: this.$el.find('input[name="rating"]').val(),
     });
     this.model.save();
     this.collection.add(this.model);
     this.$el.find('input').val('');
     this.$el.find('textarea').val('');

   }

  });
