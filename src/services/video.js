const Video = require("../models/videoSchema");
const error = require("../utils/error");

// get all video controller service
exports.getVideosService = (params) => {
  return Video.find({}).lean();
};

// get single video controller service
exports.getVideoService = (id) => {
  const hex = /[0-9A-Fa-f]{6}/g;
  let objectId = hex.test(id) ? id : null;
  if (!objectId) throw error(500, "video id is not valid");
  return Video.findById({ _id: objectId });
};
