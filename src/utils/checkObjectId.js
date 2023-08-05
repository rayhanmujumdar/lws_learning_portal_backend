const checkObjectId = (id) => {
  const hex = /[0-9A-Fa-f]{6}/g;
  return hex.test(id) ? id : null;
};

module.exports = checkObjectId;
