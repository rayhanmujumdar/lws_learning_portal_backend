const { Schema, model } = require("mongoose");
const error = require("../utils/error");

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title must be required"],
  },
  video_title: {
    type: String,
    required: [true, "video title must be required"],
  },
  video_id: {
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

// my own custom methods add to schema
assignmentSchema.statics.findByVideoId = function (id, cb) {
  return this.findOne({ video_id: id }, cb);
};

assignmentSchema.statics.updateAssignment = function ({ id, data }) {
  const { title, video_id, video_title, totalMark } = data;
  return this.updateOne(
    { _id: id },
    { title, video_id, video_title, totalMark }
  );
};

const Assignment = model("Assignment", assignmentSchema);

module.exports = Assignment;
