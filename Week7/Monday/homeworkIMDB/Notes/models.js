
//This is a constructor. Extends the prototype of Backbone model
// Extend is the same as making a new constructor
// Dog.prototype = _.extend(Animal.prototype)

var PostModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-intro',
  idAttribute: '_id',
  defaults: function() {
    return {
      title: 'Default Title',
      author: 'calvin'
    };
  },
  //whenever we call an instance of our model, it will call initialize
  initialize: function (options) {
    console.log('options name: ', options.name);
  }

});


var post = new PostModel({title: 'first post', content: 'this is content'});
//post.attributes.title will be 'first post'

var newPost = new PostModel({title: 'a great day'})
newPost.save();
newPost.set({content: 'yay we have content now!'});
newPost.toJSON();
newPost.save();

MODELS - Collection of Data
//post.set({author: 'calvin'})
//post.attributes.author will be 'calvin'
//post.toJSON() will give us our object
//post.isEmpty will return false
//post.isValid returns true
//post.changed will give you the most recent change
//post.previousAttributes() will return previous attributes
//post.previous('title') will give you previous title
//post.get('title') will give you title
//post.save(); will send object to server!
//post.set({title: 'second post'})
//tinaPost.destroy(); will delete tinaPost
//var samPost = new PostModel(_id: 97838745989283457)
//samPost.fetch();
//samPost.toJSON() will get samPost from server


COLLECTION - Collection of Models

var PostCollection = Backbone.Collection.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-intro',
  model: PostModel

});

var myCollection = new PostCollection();

//myCollection.models is empty array
//myCollection.length is 0
//myCollection.fetch() will give us all of our objects
//myCollection.length is now 4
//myCollection.models give us array of COLLECTION
//myCollection.at(0).toJSON()
var calModel = new PostModel({
  message: 'This is a new model that ill be adding to the collection'

})

//myCollection.models , calModel will not exist yet
//myCollection.add(calModel)
//myCollection.length will now be 5
//myCollection.at(4).toJSON()
//myCollection.remove(calModel);
//myCollection.models will now be back to 4
//_.each(myCollection.models, function(el) {
//console.log(el.toJSON().title);
//})


VIEWS
var PostView = Backbone.View.extend({
  tagName: 'article',
  template: _.template($('#postTmpl').html()),
  initialize: function(options) {
    console.log('our model view is created');
    console.log(this.template(this.model.toJSON());
    // var putInDOM = this.template(this.model.toJSON());
    // $('body').append(putInDOM)
    //this.el by default is an empty div
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
      //efficient way to call jquery elements off this div or element
      console.log('in render', this.el);
    return this;
  }
});

var myPostModel = new PostModel({title: 'posts are cool', content: 'content is overrated', author: 'tina'});
var myPostView = new PostView({model: myPostModel})
//gives us our template with data in it
var anotherPostModel = new PostModel({title: 'posts are cool', content: 'sike', author: 'tina'});
var anotherPostView = new PostView({model: anotherPostModel});

APP.JS
var myModel, myView
var myData = [
  {
    title: 'this is my second blog',
    content: 'this is some more content',
    author: 'also tina'
  },
  {
    title: 'this is my second blog',
    content: 'this is some more content',
    author: 'also tina'
  }
];
$(function () {
  var myCollection = new PostCollection(myData)
  myModel = new PostModel();
  myModel2 = new PostModel();

  myView = new PostView({model: myModel});
});

myView.render();

var collectionView = new PostCollectionView({collection: myCollection})


COLLECTION VIEW

var PostCollectionView = Backbone.View.extend({
  el: '#container',
  initialize: function() {
    this.addToDOM();
  },
  addAllToDOM: function () {
    _.each(this.collection.models, this.addOneToDOM.this, this);
  },
  addOneToDOM: function (post) {
    var postView = new PostView({model: post});
    this.$el.append(postView.render().el;
  }
});
