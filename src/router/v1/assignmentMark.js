const router = require("express").Router();
const verifyAdmin = require("../../middleware/verifyAdmin.js");
const {
  getAssignmentMarkController,
  createAssignmentMarkController,
  updateAssignmentMarkController,
} = require("../../controller/assignmentMark.js");

router
  .route("/")
  /** update assignment by assignment id
   * @api {GET} /assignmentMark
   * @apiDescription Get all assignmentMark to submitted assignment
   * @apiPermission private -> only access to user or admin
   *
   * @apiHeaders {String} - authorize user access token
   *
   * @apiSuccess {200 success} status code is api success
   *
   * @apiError {500 Internal server error}
   */
  .get(getAssignmentMarkController)
  /** update assignment by assignment id
   * @api {POST} /assignmentMark
   * @apiDescription create a new AssignmentMark to if user submitted her assignment
   * @apiPermission private -> only access to user
   *
   * @apiHeaders {String} - authorize user access token
   * @apiBody {Object} - assignmentMark data
   *
   * @apiSuccess {201 success} status code is api success
   *
   * @apiError {500 Internal server error}
   */
  .post(createAssignmentMarkController);
/** update assignment by assignment id
 * @api {PATCH} /assignmentMark/:id
 * @apiDescription update assignmentMark property value and set new data
 * @apiPermission private -> only can access admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiBody {Object} - assignmentMark updated data
 * @apiParams {id} - id by filter
 *
 * @apiSuccess {201 success} status code is api success
 *
 * @apiError {500 Internal server error}
 */
router.patch("/:id", verifyAdmin, updateAssignmentMarkController);

module.exports = router;
