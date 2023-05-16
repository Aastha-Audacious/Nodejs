const router = require('express').Router();
const {dashboard, login, register, services} = require('../Controller/controllers');
const {auth_token} = require('../Middleware/middleware');

router.get("/dashboard", [auth_token] ,dashboard);
router.get("/login",[auth_token], login);
router.get("/register",[auth_token], register);
router.get("/services", services);


module.exports = router;