const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addMovies = mapProperties({
  rating: "movies.rating",
  runtime_in_minutes: "movies.runtime_in_minutes",
  title: "movies.title",
});

function list() {
  return knex("theaters as t");
}

function getMovies(theater_id) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "tc.movie_id", "m.movie_id")
    .select(
      "t.*",
      "mt.isShowing",
      "m.rating",
      "m.runtime_in_minutes",
      "m.title"
    )
    .where({ "t.theater_id": theater_id })
    .then(addMovies);
}

module.exports = {
  list,
  getMovies,
};
