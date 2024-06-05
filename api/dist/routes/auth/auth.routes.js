"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../../controller/auth/auth.controller");
const route = (0, express_1.default)();
exports.authRoute = route;
route.get("/auth/google", auth_controller_1.firstAuthenticate);
route.get("/auth/google/callback", auth_controller_1.secondAuthenticate);
route.get("/auth/google/unauthorized", auth_controller_1.unauthorizedGet);
route.get('/logout', auth_controller_1.logoutGet);
