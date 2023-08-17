const { Schema, model } = require("mongoose");

/* 
{
  student_id: '64d9d6fff75be3132f00a93a',
  student_name: 'Facebook Livegt',
  video_id: '64d9d00bb688bf375020fff4',
  video_title: 'Debounce Function in JavaScript - JavaScript Job Interview question',
  totalQuiz: 2,
  totalCorrect: 1,
  totalWrong: 1,
  totalMark: 10,
  mark: 5
}
*/
const quizMarkSchema = new Schema({
  video_id: {
    type: Schema.Types.ObjectId,
    ref: "Video",
    required: [true, "VideoId must be required"],
  },
  video_title: {
    type: String,
    required: [true,"video title must be required"]
  },
  student_name: {
    type: String,
    required: [true,"Student Name are required"]
  },
  student_id: {
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
  totalMark: {
    type: Number,
    required: [true, "Total Mark are required"],
  },
  mark: {
    type: Number,
    required: [true, "Per quiz mark are required"],
  },
});

const QuizMark = model("QuizMark", quizMarkSchema);

module.exports = QuizMark;
