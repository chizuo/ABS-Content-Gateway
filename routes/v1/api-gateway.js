// Required package dependencies for api-gateway
const router = require('express').Router();
const youtube = require('./youtube');

// api gateway for v1 routes
router.use('/youtube', youtube);

module.exports = router;