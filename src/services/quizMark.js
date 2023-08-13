const QuizMark = require("../models/QuizMarkSchema");

// get all quiz Service
exports.getQuizMarkService = () => {
  return QuizMark.find({});
};

//create Quiz Mark service
exports.createQuizMarkService = (quizInfo = {}) => {
  const {
    videoId,
    studentId,
    totalQuiz,
    totalCorrect,
    totalWrong,
    perQuizMark,
  } = quizInfo;
  const quizMark = new QuizMark({
    videoId,
    studentId,
    totalQuiz,
    totalCorrect,
    totalWrong,
    perQuizMark,
  });
  return quizMark.save();
};
