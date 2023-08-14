const {
  getQuizMarkService,
  createQuizMarkService,
} = require("../services/quizMark");

// get all quizMark controller
exports.getQuizMarkController = async (req, res, next) => {
  try {
    const {studentId} = req.query || {}
    const result = await getQuizMarkService(studentId);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//create a new QuizMark if you submitted quizzes
exports.createQuizMarkController = async (req, res, next) => {
  try {
    const quizInfo = req.body;
    const result = await createQuizMarkService(quizInfo);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
