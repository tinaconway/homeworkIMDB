var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var PostCollection = require('./movieCollections');
var PostCollectionView = require('./movieCollectionView');
var FormView = require('./formView');
var PostModel = require('./movies');
var PostView = require('./movieView');
var ContactFormView = require('./contactView');
var AboutView = require('./aboutView')

module.exports = Backbone.Router.extend({
  routes: {
    "": "home",
    "home": "home",
    "addmovie": "addMovie",
    "contact": "contactPage",
    "about": "aboutPage",
    "movie/:id": "detailView",
    "*anything": "notFound"
  },
  events: {
    "click #movie": "addMovie"
  },
  notFound: function (stuff) {
    $('body').html('Sorry, but this: ' + stuff + " is not found" );
  },
  detailView: function (id) {
    var movie = new PostModel({_id: id});
    movie.fetch().then(function () {
      var movieView = new PostView({model: movie});
      $('body').html(movieView.render().el);
    });

  },
  aboutPage: function() {
    $('#container').html('');
    $('#addMovieForm').html('');
    $('.contact').html('');
    myCollection = new PostCollection();
    myCollection.fetch().then(function(data) {

      aboutView = new AboutView({collection: myCollection, el: '.about'});
    });

  },
  addMovie: function() {
    $('#container').html('');
    $('.contact').html('');
    $('.about').html('');
    myCollection = new PostCollection();
    myCollection.fetch().then(function(data) {

      newMovieFormView = new FormView({collection: myCollection, el: '#addMovieForm'});
    });


  },
  contactPage: function () {
    $('#container').html('');
    $('#addMovieForm').html('');
    $('.about').html('');
    myCollection = new PostCollection();
    myCollection.fetch().then(function(data) {

      contactView = new ContactFormView({collection: myCollection, el: '.contact'});
    });
  },
  home: function () {
    $('#addMovieForm').html('');
    $('.contact').html('');
    $('.about').html('');
    myCollection = new PostCollection();
    myCollection.fetch().then(function(data) {
      collectionView = new PostCollectionView({collection: myCollection});
      // newMovieFormView = new FormView({collection: myCollection, el: '#addMovieForm'});
    });
  }
});
