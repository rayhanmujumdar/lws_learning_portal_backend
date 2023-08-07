const Assignment = require("../models/assignmentSchema");
const error = require("../utils/error");

// get assignment service
exports.getAssignmentController = (req,res,next) => {

}


// create assignment service
exports.createAssignmentService = async (data = {}) => {
  try {
    const { title, videoId, totalMark } = data;
    const findByAssignmentVideoId = await Assignment.findByVideoId(videoId);
    if (findByAssignmentVideoId)
      throw error(500, "This video have already an Assignment");
    const assignment = new Assignment({
      title,
      videoId,
      totalMark,
    });
    return assignment.save();
  } catch (err) {
    throw error(err.status, err.message);
  }
};
