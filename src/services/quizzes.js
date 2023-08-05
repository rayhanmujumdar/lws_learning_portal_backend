const Quizzes = require("../models/QuizzesSchema");
const checkObjectId = require("../utils/checkObjectId");
const error = require("../utils/error");

// create new quiz service
exports.createQuizService = (quizBody) => {
  const { question, videoId, options } = quizBody || {};
  const quizzes = new Quizzes({
    question,
    videoId,
    options,
  });
  return quizzes.save();
};

// get all quizzes service
exports.getQuizzesService = (key, query) => {
  const videoId = query[key] ? { [key]: query[key] } : {};
  return Quizzes.find(videoId);
};

//update quiz data service
exports.updateQuizService = (id, body) => {
  const ObjectId = checkObjectId(id);
  if (!ObjectId) throw error(500, "Id is not valid");
  let filter = { _id: id };
  return Quizzes.updateOne(filter, body);
};
