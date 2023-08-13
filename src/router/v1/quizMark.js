const router = require("express").Router();
const {
  getQuizMarkController,
  createQuizMarkController,
} = require("../../controller/quizMark");

router
  .route("/")
  /** update assignment by assignment id
   * @api {GET} /quizMark
   * @apiDescription Get all quiz Mark information in this route
   * @apiPermission private -> only access to user
   *
   * @apiHeaders {String} - authorize user access token
   *
   * @apiSuccess {200 success} status code is api success
   *
   * @apiError {500 Internal server error}
   */
  .get(getQuizMarkController)
  /** update assignment by assignment id
   * @api {POST} /quizMark
   * @apiDescription create a new quiz mark if i am submitted quizzes
   * @apiPermission private -> only access to user
   *
   * @apiHeaders {String} - authorize user access token
   * @apiBody {object} - quizMark information - like ->
   *
   * @apiSuccess {201 success} status code is api success
   *
   * @apiError {500 Internal server error}
   */
  .post(createQuizMarkController);

module.exports = router;
