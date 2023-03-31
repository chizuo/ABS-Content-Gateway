const router = require("express").Router();
const v1 = require("./v1/api-gateway");

// Version gateway
router.use('/v1', v1);

// Invalid route
router.use((req,res) => {
    res.status(501).send("could not complete your request");
});

module.exports = router;