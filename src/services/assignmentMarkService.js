const AssignmentMark = require("../models/assignmentMarkSchema");
// get all assignment service
exports.getAssignmentMarkService = (key, query) => {
  const queryKey = query.student_id ? { [key]: query.student_id } : {};
  console.log(queryKey)
  return AssignmentMark.find(queryKey).lean();
};

// post a new assignmentMark
exports.createAssignmentService = (assignmentData = {}) => {
  console.log(assignmentData)
  const assignmentMark = new AssignmentMark(assignmentData);
  return assignmentMark.save();
};

// assignmentMark update data service
exports.updateAssignmentMarkService = (id, body) => {
  const filter = { _id: id };
  return AssignmentMark.updateOne(filter, body);
};
