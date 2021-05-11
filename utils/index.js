const path = require("path");
const fs = require("fs");

const moviesPath = path.join(__dirname, "../data/movies.json");
const categoriesPath = path.join(__dirname, "../data/categories.json");

const getMovies = () => readAndParse(moviesPath);

const getCategories = () => readAndParse(categoriesPath);

const getMovie = id => {
  const movies = getMovies()["movies"];
  for(const movie of movies)
  {
    if(movie.id === id.trim())
    {
      return movie;
    }
  }

  return {
    success: false,
    message: `The movie with ID ${id} does not exist`
  }
}

const readAndParse = path => {
  const rawData = fs.readFileSync(path);
  return JSON.parse(rawData);
}

module.exports = {
  getMovies,
  getCategories,
  getMovie
};
