const error = (status = 500, msg = "something want wrong") => {
  const createError = new Error(msg);
  createError.status = status;
  return createError;
};

module.exports = error;
