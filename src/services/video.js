const Video = require("../models/videoSchema");
const error = require("../utils/error");

// get all video service
exports.getVideosService = (params) => {
  return Video.find({}).lean();
};

// get single video service
exports.getVideoService = (id) => {
  const hex = /[0-9A-Fa-f]{6}/g;
  let objectId = hex.test(id) ? id : null;
  if (!objectId) throw error(500, "video id is not valid");
  return Video.findById({ _id: objectId });
};

// create a video service
exports.createVideoService = (data) => {
  const { title, description, url, views, duration } = data || {};
  const video = new Video({
    title,
    description,
    url,
    views,
    duration,
  });
  return video.save();
};
// update a video service
exports.updateVideoService = (id, data) => {
  const { title, description, url, views, duration } = data || {};
  return Video.updateOne({_id: id}, { title, description, url, views, duration });
};
// delete a video service
exports.deleteVideoService = () => {};
