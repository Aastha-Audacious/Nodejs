const router = require('express').Router();
const {donar, register, validate} = require('../Controller/controllers');
const {queryValidation} = require('../Middleware/middleware');

router.get("/login/:id", donar);
router.get("/register",register);
// router.get("/validate/:name/:contact",[queryValidation], validate);
router.get("/validate",[queryValidation], validate);



module.exports = router;