const router = require("express").Router();

const apiRoutes = require("./api/index");
const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboard.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
