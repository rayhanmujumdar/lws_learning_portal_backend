const Video = require("../models/videoSchema");
exports.getVideosService = (params) => {
  return Video.find({}).lean();
};
