const router = require("express").Router();
const userRouter = require("./user");
const videoRouter = require("./video");
const assignmentRouter = require("./assignment");
const quizzesRouter = require("./quizzes");
const assignmentMarkRouter = require("./assignmentMark");
const quizMarkRouter = require("./quizMark");
const verifyToken = require("../../middleware/verifyToken");

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
