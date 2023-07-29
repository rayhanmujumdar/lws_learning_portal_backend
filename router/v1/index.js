const router = require("express").Router();
const userRouter = require("./user");
const videoRouter = require("./video");
const assignmentRouter = require("./assignment");
const quizzesRouter = require("./quizzes");
const assignmentMarkRouter = require("./assignmentMark");
const quizMarkRouter = require("./quizMark");

router.get("/health", (_req, res) => {
  res.json({
    message: "success",
  });
});

// user auth router
router.use("/api/v1/auth", userRouter);
// video outer
router.use("/api/v1/video", videoRouter);
// assignment router
router.use("/api/v1/assignment", assignmentRouter);
// quizzes router
router.use("/api/v1/quizzes", quizzesRouter);
// assignmentMark router
router.use("/api/v1/assignmentMark", assignmentMarkRouter);
//quizMark router
router.use("/api/v1/quizMark", quizMarkRouter);

module.exports = router;
