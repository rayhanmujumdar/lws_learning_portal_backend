const {
  createAssignmentService,
  getAssignmentService,
  updateAssignmentService,
} = require("../services/assignment");

// get all assignment Controller
exports.getAssignmentController = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await getAssignmentService(query);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
// create assignment Controller
exports.createAssignmentController = async (req, res, next) => {
  try {
    const assignmentBody = req.body;
    const result = await createAssignmentService(assignmentBody);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

// update assignment Controller
exports.updateAssignmentController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await updateAssignmentService(id, updatedData);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// delete assignment Controller
exports.deleteAssignmentController = (req, res, next) => {
  try {
    const body = req.body;
  } catch (err) {
    next(err);
  }
};
