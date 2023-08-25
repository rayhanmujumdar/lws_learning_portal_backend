const { Schema, model } = require("mongoose");

const quizzesSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question must be required"],
  },
  video_title: {
    type: String,
    required: [true, "Video Title must be required"],
  },
  video_id: {
    type: String,
    ref: "Video",
    required: [true, "VideoId must be required"],
  },
  options: {
    type: [
      new Schema({
        id: {
          type: Number,
          required: [true, "id must be required"],
        },
        option: {
          type: String,
          require: [true, "Option must be required"],
        },
        isCorrect: Boolean,
      }),
    ],
    required: [true, "Options are must be required"],
  },
});

quizzesSchema.path("options").validate(function (v) {
  return v.length >= 2;
}, "Minimum 2 options required");

const Quizzes = model("Quizzes", quizzesSchema);
module.exports = Quizzes;
