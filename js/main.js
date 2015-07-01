var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var Router = require('./router');
var models, myCollection, collectionView, newMovieFormView, contactView, aboutView;



module.exports = $(function () {
  new Router();
  Backbone.history.start();

});
