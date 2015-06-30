var models, getData, myCollection, collectionView;

var $titleInput = $('#titleInput');
var $ratingInput = $('#ratingInput');
var $releasedInput = $('#releasedInput');
var $plotInput = $('#plotInput');
var $coverInput = $('#coverInput');


$(document).ready(function(){
    page.init();

});

var page = {
    init: function () {
      page.initStyling();
      page.initEvents();
      page.loadMovies();

    },
    initStyling: function(){


    },
    initEvents: function() {
    $('.add').on('click', '#userSubmit', page.addMovie);
    $('#container').on('click', '.editButton', page.editMovies);
    $('#container').on('click', '.delete', page.deleteMovie);


      $('.inputEdit').keypress(function(event) {
        if (event.keyCode == '13') {
          if ($.trim(this.value) == ''){
           this.value = (this.defaultValue ? this.defaultValue : '');
         }
         else
         {
           $(this).prev().prev().html(this.value);
         }

         $(this).hide();
         $(this).prev().show();
         $(this).prev().prev().show();
        }
      });
  },

  addMovie: function() {
    event.preventDefault();
    var NewMovie = new PostModel({
      title: $titleInput.val(),
      released: $releasedInput.val(),
      cover: $coverInput.val(),
      plot: $plotInput.val(),
      rating: $ratingInput.val()
    })

    $titleInput.val("");
    $releasedInput.val("");
    $coverInput.val("");
    $plotInput.val("");
    $ratingInput.val("");
    NewMovie.save().then(function(data) {
      page.loadMovies();
    })
  },

  editMovies: function() {
    $(this).hide();
		$(this).prev().hide();
		$(this).next().show();
		$(this).next().select();
    $('.inputEdit').blur(function() {
           if ($.trim(this.value) == ''){
         this.value = (this.defaultValue ? this.defaultValue : '');
       }
       else{
         $(this).prev().prev().html(this.value);
       }

       $(this).hide();
       $(this).prev().show();
       $(this).prev().prev().show();
       });
       $('.inputEdit').keypress(function(event) {
         if (event.keyCode == '13') {
           if ($.trim(this.value) == ''){
            this.value = (this.defaultValue ? this.defaultValue : '');
          }
          else
          {
            var newValue = this.value.toString();
            var propertyChange = $(this).prev().prev().attr('class').toString();
            $(this).prev().prev().html(this.value);
            var postId = $(this).attr('id').toString();

            _.each(myCollection.toJSON(), function(el,idx) {
              if(el._id === postId) {
                console.log(propertyChange);
                myCollection.at(idx).set({ propertyChange: newValue }).save();
              };
            })
          }

          $(this).hide();
          $(this).prev().show();
          $(this).prev().prev().show();
         }
       });
  },

  deleteMovie: function() {
    var postId = $(this).attr('id').toString();
    _.each(myCollection.toJSON(), function(el,idx) {
      if(el._id === postId) {
        myCollection.at(idx).destroy().then(function(data) {
          page.loadMovies();
        });
      };
    })

  },

  loadMovies: function() {
    $('#container').empty();
    myCollection = new PostCollection();
    myCollection.fetch().then(function(data) {
      collectionView = new PostCollectionView({collection: myCollection});
    });

  }

}
