const { Schema, model } = require("mongoose");

const quizMarkSchema = new Schema({
  id: Schema.Types.ObjectId,
  videoId: {
    type: Schema.Types.ObjectId,
    ref: "Video",
    required: [true, "VideoId must be required"],
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "VideoId must be required"],
  },
  totalQuiz: {
    type: Number,
    required: [true, "Total Quiz are required"],
  },
  totalCorrect: {
    type: Number,
    required: [true, "Total correct are required"],
  },
  totalWrong: {
    type: Number,
    required: [true, "Total wrong are required"],
  },
  mark: {
    type: Number,
    required: [true, "Per quiz mark are required"],
  },
});

const QuizMark = model("QuizMark", quizMarkSchema);

module.exports = QuizMark;
