const { Schema, model } = require("mongoose");

const quizzesSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question must be required"],
  },
  videoId: {
    type: Schema.Types.ObjectId,
    ref: "Video",
    required: [true,"VideoId must be required"]
  },
  options: {
    type: [
      new Schema({
        option: {
          type: String,
          require: [true, "Option must be required"],
        },
        isCorrect: Boolean,
      }),
    ],
    required: [true,'Options are must be required']
  },
});

quizzesSchema.path("options").validate(function (v) {
  return v.length >= 2;
}, "Minimum 2 options required");

const Quizzes = model("Quizzes", quizzesSchema);
module.exports = Quizzes;
