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
    this.listenTo(this.collection, 'update', this.reload);
  },
  reload: function () {
    console.log('reloading page');
  this.$el.html('');
  this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (post) {
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  }

});
