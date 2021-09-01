const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

async function list(req, res) {
  const { is_showing } = req.query;
  if (is_showing) {
    const data = await service.list(is_showing);
    res.json({ data });
  } else {
    const data = await service.list();
    res.json({ data });
  }
}

function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
  movieExists,
};
