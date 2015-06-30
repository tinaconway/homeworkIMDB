var Backbone = require('backbone');
var $ = require ('jquery');
Backbone.$ = $;
var _ = require('underscore');

module.exports = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  events: {

  },
  initialize: function (options) {

  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});


// var PostView = Backbone.View.extend({
//   template: _.template($('#postTmpl').html()),
//   tagName: 'article',
//   events: {
//
//   },
//   initialize: function (options) {
//
//   },
//   render: function () {
//     var markup = this.template(this.model.toJSON());
//     this.$el.html(markup);
//     return this;
//   }
// });

var PostCollectionView = Backbone.View.extend({
  el: '#container',
  collection: null,
  events: {

  },
  initialize: function (options) {

    this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (post, idx, arr) {
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  }

});
