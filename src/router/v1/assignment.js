const router = require("express").Router();
const verifyAdmin = require("../../middleware/verifyAdmin");
const {
  getAssignmentController,
  createAssignmentController,
  updateAssignmentController,
  deleteAssignmentController,
} = require("../../controller/assignment");

/** get all assignment otherwise get assignment by videoId
 * @api {GET} /assignment?videoId or /assignment
 * @apiDescription get all assignment or get a single assignment by videoID
 * @apiPermission private -> access authenticate user and admin are both
 *
 * @apiHeaders {String} - authorize user access token
 * @apiQuery {Object} - videoId
 *
 * @apiSuccess {200 success} status code is api success
 *
 * @apiError {500 Internal server error}
 */
router.get("/", getAssignmentController);

/** post new assignment within video section
 * @api {POST} /assignment
 * @apiDescription post a new assignment within video section
 * @apiPermission private -> only access admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiBody {Object} - assignment object data
 *
 * @apiSuccess {200 success} status code is api success
 *
 * @apiError {500 Internal server error}
 */

router.post("/", createAssignmentController);

/** update assignment by assignment id
 * @api {PATCH} /assignment
 * @apiDescription update my assignment title, video id or other information
 * @apiPermission private -> only access to admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiBody {Object} - updated assignment data
 * @apiParams {id} - assignment id
 *
 * @apiSuccess {200 success} status code is api success
 *
 * @apiError {500 Internal server error}
 */
router.patch("/assignment/:id", verifyAdmin, updateAssignmentController);

/** delete assignment
 * @api {DELETE} /assignment
 * @apiDescription delete my assignment
 * @apiPermission private -> only access to admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {id} - assignment id
 *
 * @apiSuccess {200 success} status code is api success
 *
 * @apiError {500 Internal server error}
 */
router.delete("/assignment/:id", verifyAdmin, deleteAssignmentController);
module.exports = router;
