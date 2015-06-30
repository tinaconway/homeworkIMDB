var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  events: {

  },

  initialize: function (options) {
    // console.log('view created');
    // console.log('in initialize', this.el);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // console.log('in render', this.el);
    return this;
  }
});
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
