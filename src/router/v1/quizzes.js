const router = require("express").Router();
const {
  getQuizzesController,
  getQuizController,
  createQuizController,
  updateQuizController,
  deleteQuizController
} = require("../../controller/quizzes.js");
const verifyAdmin = require("../../middleware/verifyAdmin.js");

/** get all quizzes
 * @api {GET}
 * @apiDescription - get all quiz by this api with video id
 * @apiPermission {private} - only access authenticate user
 *
 * @apiHeaders {String} - authorize user access token
 * @apiQuery {Object} - videoId
 *
 * @apiSuccess {200 success} status code is get all quiz
 * @apiError {500 internal server error}
 */
router.get("/", getQuizzesController);

/** get all quizzes
 * @api {GET}
 * @apiDescription - get single Quiz
 * @apiPermission {private} - only access authenticate admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {id} - quiz id
 *
 * @apiSuccess {200 success} status code is get all quiz
 * @apiError {500 internal server error}
 */
router.get("/:id", getQuizController);

/** create a new quizzes
 * @api {POST}
 * @apiDescription - create a quiz for my existing video with video id
 * @apiPermission {private} - only access authenticate user with admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiBody {object} - question, videoId, options
 *
 * @apiSuccess {201 success} status code is quiz created
 * @apiError {500 internal server error}
 */
router.post("/", verifyAdmin, createQuizController);



/** update Quiz options and other
 * @api {PATCH}
 * @apiDescription - this api use to update my quiz option videoId or others
 * @apiPermission {private} - only access authenticate user with admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {id} - quizId
 * @apiBody {Object} - quiz updated data
 *
 * @apiSuccess {200 success} status code is update quiz
 * @apiError {500 internal server error}
 */
router.patch("/:id", verifyAdmin, updateQuizController);

/** delete my existing Quiz
 * @api {DELETE}
 * @apiDescription - this api hit to delete my quiz by quizId
 * @apiPermission {private} - only access authenticate user with admin
 *
 * @apiHeaders {String} - authorize user access token
 * @apiParams {id} - quizId
 *
 * @apiSuccess {204 No content} status code is delete quiz successfully
 * @apiError {500 internal server error}
 */

router.delete('/:id',verifyAdmin,deleteQuizController)
module.exports = router;
