const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const reviewsRouter = require("../reviews/reviews.router");

router.use("/:movieId([0-9]+)/reviews", controller.movieExists, reviewsRouter);
router.route("/:movieId([0-9]+)").get(controller.read);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
