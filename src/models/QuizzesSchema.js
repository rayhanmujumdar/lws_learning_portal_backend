const { Schema, model } = require("mongoose");

const QuizzesSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question must be required"],
  },
  videoId: {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
  options: [
    new Schema({
      id: Schema.Types.ObjectId,
      option: {
        type: String,
        require: [true, "Option must be required"],
      },
      isCorrect: Boolean,
    }),
  ],
});

const Quizzes = model("Quizzes", QuizzesSchema);
module.exports = Quizzes;
