var Backbone = require('backbone');
var $ = require ('jquery');
Backbone.$ = $;
var _ = require('underscore');
var PostModel = require('./movies');


module.exports = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  events: {
    'click .delete': 'deleteMovie',
    'click .editButton': 'editMovie'
  },
  initialize: function (options) {
    this.listenTo(this.model, 'destroy', this.remove);
  },
  deleteMovie: function (evt) {
    evt.preventDefault();
    this.model.destroy();
  },
  editMovie: function(evt) {
    evt.preventDefault();
    var self = this;
    var selfModel = this.model;
    var selfCollection = this.collection;
    console.log(self);
    console.log(evt);
    console.log('i am in edit');
    $(event.target).hide();
    $(event.target).prev().hide();
    $(event.target).next().show();
    $(event.target).next().select();

    $('.inputEdit').blur(function() {
           if ($.trim(this.value) == ''){
         this.value = (this.defaultValue ? this.defaultValue : '');
       }
       else{
         $(event.target).prev().prev().html(this.value);
       }
       $(event.target).hide();
       $(event.target).prev().show();
       $(event.target).prev().prev().show();
       });
       $('.inputEdit').keypress(function(event) {
         if (event.keyCode == '13') {
           if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
          }
          else
          {
            var newValue = this.value.toString();
            var propertyChange =   $(event.target).prev().prev().attr('class').toString();
            $(event.target).prev().prev().html(this.value);
            var newObj = {};
            newObj[propertyChange] = newValue;
            console.log(self);
            selfModel.set(
            newObj
           );
           selfModel.save();
          //  selfCollection.add(selfModel);


          }
          $(event.target).hide();
          $(event.target).prev().show();
          $(event.target).prev().prev().show();
         }
       });
  },
  remove: function () {
  this.$el.remove();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
