const router = require('express').Router();

//Mounted on /api
router.use('/user', require("./user"));

//404 Handling
router.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})

module.exports = router;