var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var PostModel = require('./movies');


module.exports = Backbone.View.extend({
    className: 'about',
    template: _.template($('#aboutTmpl').html()),
    initialize: function (options) {
      this.el = options.el;
    if(!this.model) {
      this.model = new PostModel();
    }
    this.render();
    },
    render: function () {
      var myModel = this.model.isNew() ? {} : this.model.toJSON();
      myModel.isNew = this.model.isNew();
      var markup = this.template(myModel);
      this.$el.html(markup);
      return this;
    }
  });
