const { Schema, model } = require("mongoose");
const error = require("../utils/error");

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title must be required"],
  },
  videoId: {
    type: Schema.Types.ObjectId,
    ref: "Video",
    required: [true, "VideoId must be required"],
  },
  totalMark: {
    type: Number,
    enum: {
      values: [100, 200, 300],
      message: `{VALUE} is not supported`,
    },
    required: [true, "Assignment Number must be required"],
  },
});

assignmentSchema.statics.findByVideoId = function (videoId, cb) {
  return this.findOne({ videoId }, cb);
};

const Assignment = model("Assignment", assignmentSchema);

module.exports = Assignment;
