const { getVideosService, getVideoService } = require("../services/video");
const error = require("../utils/error");

//get all video controller
exports.getVideosController = async (req, res, next) => {
  try {
    const videoParams = req.params || {};
    const videos = await getVideosService(videoParams);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

// get single video controller
exports.getVideoController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const video = await getVideoService(id);
    console.log(video)
    if (!video) throw error(404, "Video item not found");
    res.status(200).json(video);
  } catch (err) {
    console.log(err)
    next(err);
  }
};
