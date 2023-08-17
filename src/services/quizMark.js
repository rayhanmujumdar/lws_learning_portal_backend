const QuizMark = require("../models/QuizMarkSchema");

// get all quiz Service
exports.getQuizMarkService = (id) => {
  return QuizMark.find({ student_id: id });
};

//create Quiz Mark service
exports.createQuizMarkService = (quizInfo = {}) => {
  const quizMark = new QuizMark(quizInfo);
  return quizMark.save();
};
