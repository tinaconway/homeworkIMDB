var Backbone = require('backbone');
var $ = require ('jquery');
Backbone.$ = $;
var PostModel = require('./movies');

module.exports = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/tinasimdb2',
  initialize: function() {

  }
});
