const Assignment = require("../models/assignmentSchema");
const error = require("../utils/error");
const checkObjectId = require("../utils/checkObjectId");

// get assignment service
exports.getAssignmentService = (query) => {
  const { videoId } = query || {};
  if (videoId) {
    const isValidObjectId = checkObjectId(videoId);
    if (!isValidObjectId) throw error(500, "VideoId is not valid");
    return Assignment.findByVideoId(videoId);
  }
  return Assignment.find({}).exec();
};

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
    throw error(500, "Internal server error");
  }
};

//update Assignment Service
exports.updateAssignmentService = (id, updatedData) => {
  const isValidObjectId = checkObjectId(id);
  if (!isValidObjectId) throw error(500, "VideoId is not valid");
  return Assignment.updateAssignment({
    id,
    data: updatedData,
  });
};

//delete assignment service
exports.deleteAssignmentService = (id) => {
  const isValidObjectId = checkObjectId(id);
  if (!isValidObjectId) throw error(500, "VideoId is not valid");
  return Assignment.deleteOne({ _id: id });
};
