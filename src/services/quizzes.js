const Quizzes = require("../models/QuizzesSchema");
const checkObjectId = require("../utils/checkObjectId");
const error = require("../utils/error");

// get all quizzes service
exports.getQuizzesService = (key, query) => {
  const videoId = query[key] ? { [key]: query[key] } : {};
  return Quizzes.find(videoId);
};

// get single quiz service
exports.getQuizService = (id) => {
  const isValidObjectId = checkObjectId(id);
  if (!isValidObjectId) throw error(500, "ObjectId is not valid");
  return Quizzes.findOne({ _id: id }).lean();
};

// create new quiz service
exports.createQuizService = (quizBody) => {
  const { question, video_id, video_title, options } = quizBody || {};
  const quizzes = new Quizzes({ question, video_id, video_title, options });
  return quizzes.save();
};
//update quiz data service
exports.updateQuizService = (id, body) => {
  const isValidId = checkObjectId(id);
  if (!isValidId) throw error(500, "ObjectId is not valid");
  let filter = { _id: id };
  return Quizzes.findOneAndUpdate(filter, body, { new: true });
};

// delete quiz to database
exports.deleteQuizService = (id) => {
  const isValidId = checkObjectId(id);
  if (!isValidId) throw error(500, "ObjectId is not valid");
  return Quizzes.deleteOne({ _id: id });
};
