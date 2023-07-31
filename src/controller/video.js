const {
  getVideosService,
  getVideoService,
  createVideoService,
  updateVideoService,
  deleteVideoService,
} = require("../services/video");
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
    console.log(video);
    if (!video) throw error(404, "Video item not found");
    res.status(200).json(video);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//post a new video controller
exports.createVideoController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createVideoService(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

//update video controller
exports.updateVideoController = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const result = await updateVideoService(id, data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

//delete video controller
exports.deleteVideoController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deleteVideoService(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
