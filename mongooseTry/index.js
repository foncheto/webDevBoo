const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('We connected!!!')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model('Movie', movieSchema) // Gives back a class

const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})