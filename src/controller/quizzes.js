const {
  createQuizService,
  getQuizzesService,
  updateQuizService,
  deleteQuizService,
} = require("../services/quizzes");

// post quiz controller
exports.createQuizController = async (req, res, next) => {
  try {
    const quizzes = req.body;
    const result = await createQuizService(quizzes);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

//Get all quiz controller
exports.getQuizzesController = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await getQuizzesService("videoId", query);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// update quiz controller
exports.updateQuizController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await updateQuizService(id, body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// delete quiz controller
exports.deleteQuizController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deleteQuizService(id);
    if (result.deletedCount > 0) {
      return res.status(204).json(result);
    }
    return res.status(500).json({
      message: "content was already deleted",
    });
  } catch (err) {
    next(err);
  }
};
