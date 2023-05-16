const router = require("express").Router()

// Services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

const partyRouter = r

module.exports = router;