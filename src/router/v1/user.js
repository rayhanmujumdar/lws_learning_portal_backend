const router = require("express").Router();
const { registerController,loginController,getUsersController } = require("../../controller/user");

// register route
/** use JSDOC API documentation generator
 * @api {POST} /auth/register
 * @apiDescription user create a new account
 * @apiPermission public
 *
//  * @apiHeader {String} Authorization user's access token
 * @apiBody {name,email,password}
 *
 * @apiSuccess {created 201} status code is api created
 *
 * @apiError (Conflict 409) user already exist error database error
 * @apiError (Internal server error 500) have any server error
 */
router.post("/register", registerController);

// login route
/** use JSDOC API documentation generator
 * @api {POST} /auth/login
 * @apiDescription user can login in this api
 * @apiPermission public
 *
 * @apiHeader no authorization access token
 *
 * @apiBody {email,password}
 *
 * @apiSuccess 200 status code is api success
 *
 * @apiError (Not Found 404) user not found error
 * @apiError (Internal server error 500) have any server error
 */
router.post('/login',loginController)

// Get all users
/** use JSDOC API documentation generator
 * @api {GET} /auth/users
 * @apiDescription get all logged in users
 * @apiPermission public
 *
 * @apiHeader no authorization access token
 *
 * @apiQuery {email}
 *
 * @apiSuccess 200 status code is api success
 *
 * @apiError (Not Found 404) user not found error
 * @apiError (Internal server error 500) have any server error
 */
router.get('/users',getUsersController)

module.exports = router;
