const express = require("express");
const router = express.Router();
const classroomController = require("../controllers/classroom.controller");

router.route("/")
  .get(classroomController.getClassrooms)
  .post(classroomController.postClassroom)

router.use('/:classroomId', classroomController.middleware)

router.route("/:classroomId")
  .get(classroomController.getClassroom)
  .put(classroomController.putClassroom)
  .patch(classroomController.patchClassroom)
  .delete(classroomController.deleteClassroom)

module.exports = router;