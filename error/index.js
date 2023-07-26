const notFoundError = (_req, _res, next) => {
  const err = new Error("Resource not found");
  err.status = 404;
  next(err);
};

const errorHandler = (err, _req, res, _next) => {
  if (err.status || err.message) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Internal server error",
  });
};

module.exports = { notFoundError, errorHandler };
