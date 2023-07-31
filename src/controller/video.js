const { getVideosService } = require("../services/video");
exports.getVideosController = async (req, res, next) => {
  try {
    const videoParams = req.params || {};
    const videos = await getVideosService(videoParams);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
