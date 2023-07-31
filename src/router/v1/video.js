const router = require("express").Router();
const verifyAdmin = require("../../middleware/verifyAdmin");
const {
  getVideosController,
  getVideoController,
  createVideoController,
  updateVideoController,
  deleteVideoController,
} = require("../../controller/video");

router
  .route("/")
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
  .get(getVideosController)
  /** post a new video
   * @api {POST}
   * @apiDescription - in this api i can post my video
   * @apiPermission {private} - only can access admin
   *
   * @apiHeaders {String} - authorize user access token
   * @apiBody {video data}
   *
   * @apiSuccess {201 success} status code is api success
   * @apiError {500 internal server error}
   */
  .post(verifyAdmin, createVideoController);

router
  .route("/:id")
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
  .get(getVideoController)
  /** update video item
   * @api {PATCH}
   * @apiDescription - this api use to i can update my videos title,description,url etc
   * @apiPermission {private} - only access user admin
   *
   * @apiHeaders {String} - authorize user access token
   * @apiParams {id}
   * @apiBody {video data}
   *
   * @apiSuccess {200 success} status code is api success
   * @apiError {500 internal server error}
   */
  .patch(verifyAdmin, updateVideoController)
  /** delete video item
   * @api {PATCH}
   * @apiDescription - this api use to i can delete my videos
   * @apiPermission {private} - only access user admin
   *
   * @apiHeaders {String} - authorize user access token
   * @apiParams {id}
   *
   * @apiSuccess {200 success} status code is api success
   * @apiError {500 internal server error}
   * @apiError {404 resource not found}
   */
  .delete(verifyAdmin, deleteVideoController);

module.exports = router;
