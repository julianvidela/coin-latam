"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRouter = void 0;
const express_1 = require("express");
const isLoggedIn_1 = require("../../middleware/isLoggedIn");
const auth_controller_1 = require("../../controller/auth/auth.controller");
const router = (0, express_1.Router)();
exports.protectedRouter = router;
router.get('/protected', isLoggedIn_1.isLoggedIn, auth_controller_1.logoutGet);
