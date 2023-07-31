const router = require("express").Router();
const { getVideosController } = require("../../controller/video");
/**
 * @api {GET}
 * @apiDescription - get all video items
 * @apiPermission {private} - only access authenticate user
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {}
 *
 * @apiSuccess {200 success} status code is api success
 * @apiError {500 internal server error}
 */
router.get("/", getVideosController);

module.exports = router;
