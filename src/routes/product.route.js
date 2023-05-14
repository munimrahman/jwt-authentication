const express = require("express");
const router = express.Router();
// const jobController = require("../controllers/job.controller");
// const authorization = require("../middleware/authorization");
// const verifyToken = require("../middleware/verifyToken");

router.route("/products");
//   .get(jobController.getAllJobs)
//   .post(
// verifyToken,
// authorization("admin", "hiring-manager"),
// jobController.postJobs
//   );

// router
//   .route("/products/:id")
//   .get(jobController.getJobById)
//   .post(jobController.applyJob)
//   .patch(jobController.updateJob);

module.exports = router;
