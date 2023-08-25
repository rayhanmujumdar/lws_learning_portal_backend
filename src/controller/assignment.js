const {
  createAssignmentService,
  getAssignmentService,
  updateAssignmentService,
  deleteAssignmentService,
  getSingleAssignmentService
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

// get a single Assignment Controller
exports.getSingleAssignmentController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await getSingleAssignmentService(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err)
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
exports.deleteAssignmentController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deleteAssignmentService(id);
    if (result.deletedCount > 0) {
      res.status(200).json(result);
    }
    res.status(500).json({
      message: "not exist",
    });
  } catch (err) {
    next(err);
  }
};
