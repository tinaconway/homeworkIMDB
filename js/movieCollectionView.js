var Backbone = require('backbone');
var $ = require ('jquery');
Backbone.$ = $;
var _ = require('underscore');
var PostView = require('./movieView');

module.exports = Backbone.View.extend({
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
// var PostCollectionView = Backbone.View.extend({
//   el: '#container',
//   collection: null,
//   events: {
//
//   },
//   initialize: function (options) {
//
//     this.addAll();
//   },
//   addAll: function () {
//     _.each(this.collection.models, this.addOne, this);
//   },
//   addOne: function (post, idx, arr) {
//     var postView = new PostView({model: post});
//     this.$el.append(postView.render().el);
//   }
//
// });
