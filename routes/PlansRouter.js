/*jshint esversion: 6 */
let express = require("express");
let router = express.Router();
let PlansController = require("../controllers/PlansController");

router.get("/admin/plans", PlansController.index);

router.get("/admin/plans/create", PlansController.create);

router.get("/admin/plans/edit/:id", PlansController.edit);

router.get("/plans/deactivate/:id", PlansController.deactivate);

router.get("/plans/activate/:id", PlansController.activate);

router.post("/plans/update", PlansController.update);

router.post("/plans/store", PlansController.store);

module.exports = router;