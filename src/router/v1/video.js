const router = require("express").Router();
const { getVideosController,getVideoController } = require("../../controller/video");
/** Get all videos
 * @api {GET}
 * @apiDescription - get all video items
 * @apiPermission {private} - only access authenticate user
 *
 * @apiHeaders {String} - authorize user access token
 *
 * @apiSuccess {200 success} status code is api success
 * @apiError {500 internal server error}
 */
router.get("/", getVideosController);

/** get single video
 * @api {GET}
 * @apiDescription - get single video items
 * @apiPermission {private} - only access authenticate user
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {id}
 *
 * @apiSuccess {200 success} status code is api success
 * @apiError {500 internal server error}
 */
router.get('/:id',getVideoController)
module.exports = router;
