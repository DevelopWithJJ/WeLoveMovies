const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceMovies = reduceProperties("movie_id", {
  movie_id: ["movie_id"],
  title: ["title"],
  rating: ["rating"],
  runtime_in_minutes: ["runtime_in_minutes"],
  description: ["description"],
  image_url: ["image_url"],
});

function list(is_showing = false) {
  if (is_showing) {
    return knex("movies as m")
      .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
      .select("m.*")
      .where({ "mt.is_showing": true })
      .then(reduceMovies);
  } else {
    return knex("movies").select("*");
  }
}

function read(movie_id) {
  return knex("movies").select().where({ movie_id }).first();
}

module.exports = {
  list,
  read,
};
