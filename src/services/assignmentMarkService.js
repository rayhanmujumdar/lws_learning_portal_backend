const AssignmentMark = require("../models/assignmentMarkSchema");
// get all assignment service
exports.getAssignmentMarkService = () => {
  return AssignmentMark.find().lean();
};

// post a new assignmentMark
exports.createAssignmentService = (markData = {}) => {
  const {
    assignmentId,
    studentId,
    createdAt = Date.now(),
    mark,
    repo_link,
    status,
  } = markData;
  const assignmentMark = new AssignmentMark({
    assignmentId,
    studentId,
    createdAt,
    mark,
    repo_link,
    status,
  });
  return assignmentMark.save();
};
