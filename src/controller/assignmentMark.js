const {
  getAssignmentMarkService,
  updateAssignmentMarkService,
  createAssignmentService,
} = require("../services/assignmentMarkService.js");
// get all assignment
exports.getAssignmentMarkController = async (req, res, next) => {
  try {
    const result = await getAssignmentMarkService();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
// create a new Assignment in this controller
exports.createAssignmentMarkController = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await createAssignmentService(body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

// assignmentMark update data
exports.updateAssignmentMarkController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await updateAssignmentMarkService(id, body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
