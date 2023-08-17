const { Schema, model } = require("mongoose");

const assignmentMarkSchema = new Schema({
  assignment_id: {
    type: Schema.Types.ObjectId,
    required: [true, "assignment id must be required"],
    ref: "Assignment",
  },
  student_id: {
    type: Schema.Types.ObjectId,
    required: [true, "student id must be required"],
    ref: "User",
  },
  student_name: {
    type: String,
    required: [true, "Student name must be required"],
  },
  title: {
    type: String,
    required: [true, "title must be required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  mark: {
    type: String,
    required: [true, "Mark must be required"],
  },
  totalMark: {
    type: String,
    required: [true, "Total Mark must be required"],
  },
  repo_link: {
    type: String,
    required: [true, "repo link must be required"],
  },
  status: {
    type: String,
    enum: ["pending", "publish"],
    default: "pending",
  },
});

// assignmentMark repo link validation
assignmentMarkSchema.path("repo_link").validate((v) => {
  const regex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return regex.test(v);
}, "{VALUE} is not valid link");

const AssignmentMark = model("AssignmentMark", assignmentMarkSchema);

module.exports = AssignmentMark;
