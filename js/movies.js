var Backbone = require ('backbone');
var $ = require ('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tinasimdb2',
  idAttribute: '_id',
  defaults: function () {
   return {
     cover: 'http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg'
   };
 },
  initialize: function (options) {

  }
});





// var ForrestGump = new PostModel({
//   title: 'Forrest Gump',
//   released: '1994',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_SX214_AL_.jpg',
//   plot: 'Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.',
//   rating: '8.8'
// })
// var BigLebowski = new PostModel({
//   title: 'The Big Lebowski',
//   released: '1998',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX214_AL_.jpg',
//   plot: '"The Dude" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
//   rating: '8.2'
// })
// var FightClub = new PostModel({
//   title: 'Fight Club',
//   released: '1999',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX214_AL_.jpg',
//   plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...',
//   rating: '8.9'
// })
// var Braveheart = new PostModel({
//   title: 'Braveheart',
//   released: '1995',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BNjA4ODYxMDU3Nl5BMl5BanBnXkFtZTcwMzkzMTk3OA@@._V1_SX214_AL_.jpg',
//   plot: 'When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt and leads Scottish warriors against the cruel English tyrant who rules Scotland with an iron fist.',
//   rating: '8.4'
// })
// var BreakfastClub = new PostModel({
//   title: 'The Breakfast Club',
//   released: '1985',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMzYyNTQ1Nzk2M15BMl5BanBnXkFtZTcwODk0NTQyMQ@@._V1_SX214_AL_.jpg',
//   plot: 'Five high school students, all different stereotypes, meet in detention, where they pour their hearts out to each other, and discover how they have a lot more in common than they thought.',
//   rating: '7.9'
// })
// var Bueller = new PostModel({
//   title: "Ferris Bueller's Day Off",
//   released: '1986',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTg2MTUxODY4NV5BMl5BanBnXkFtZTcwNzQ5NzU2OQ@@._V1_SX214_AL_.jpg',
//   plot: 'A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.',
//   rating: '7.9'
// })
// var Guardians = new PostModel({
//   title: 'Guardians of the Galaxy',
//   released: '2014',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX214_AL_.jpg',
//   plot: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
//   rating: '8.1'
// })
// var StandByMe = new PostModel({
//   title: 'Stand By Me',
//   released: '1986',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BNDk2MTkyMTA1OF5BMl5BanBnXkFtZTcwOTc2Njk3OA@@._V1_SX214_AL_.jpg',
//   plot: 'After the death of a friend, a writer recounts a boyhood journey to find the body of a missing boy.',
//   rating: '8.1'
// })
// var Avengers = new PostModel({
//   title: 'The Avengers',
//   released: '2012',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SY317_CR0,0,214,317_AL_.jpg',
//   plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
//   rating: '8.2'
// })
// var ShutterIsland = new PostModel({
//   title: 'Shutter Island',
//   released: '2010',
//   cover: 'http://ia.media-imdb.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX214_AL_.jpg',
//   plot: 'A U.S Marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.',
//   rating: '8.1'
// })

// ShutterIsland.save();
// Avengers.save();
// StandByMe.save();
// Guardians.save();
// Bueller.save();
// BreakfastClub.save();
// Braveheart.save();
// FightClub.save();
// BigLebowski.save();
// ForrestGump.save();
