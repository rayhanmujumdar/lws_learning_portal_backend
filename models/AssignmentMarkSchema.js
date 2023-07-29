const { Schema, model } = require("mongoose");

const assignmentMarkSchema = new Schema({
  id: Schema.Types.ObjectId,
  assignmentId: {
    type: Schema.Types.ObjectId,
    required: [true, "assignment id must be required"],
    ref: "Assignment",
  },
  studentId: {
    type: Schema.Types.ObjectId,
    required: [true, "student id must be required"],
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  mark: {
    type: Number,
    required: [true, "Mark must be required"],
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
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
  return regex.test(v);
}, "{VALUE} is not valid link");
