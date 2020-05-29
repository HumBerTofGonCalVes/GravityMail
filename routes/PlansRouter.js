/*jshint esversion: 6 */
let express = require("express");
let router = express.Router();
let PlansController = require("../controllers/PlansController");

router.get("/plans", PlansController.index);

router.get("/admin/plans/create", PlansController.create);

router.post("/plans/store", PlansController.store);

module.exports = router;