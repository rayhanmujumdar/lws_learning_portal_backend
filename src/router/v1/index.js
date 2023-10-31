const router = require("express").Router();
const userRouter = require("./user.js");
const videoRouter = require("./video.js");
const assignmentRouter = require("./assignment.js");
const quizzesRouter = require("./quizzes.js");
const assignmentMarkRouter = require("./assignmentMark.js");
const quizMarkRouter = require("./quizMark.js");
const verifyToken = require("../../middleware/verifyToken.js");

// check server health to this route
router.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    message: "success",
  });
});

// user auth router
router.use("/api/v1/auth", userRouter);
// video outer
router.use("/api/v1/videos", verifyToken, videoRouter);
// assignment router
router.use("/api/v1/assignment",verifyToken, assignmentRouter);
// quizzes router
router.use("/api/v1/quizzes",verifyToken, quizzesRouter);
// assignmentMark router
router.use("/api/v1/assignmentMark",verifyToken ,assignmentMarkRouter);
//quizMark router
router.use("/api/v1/quizMark",verifyToken, quizMarkRouter);

module.exports = router;
