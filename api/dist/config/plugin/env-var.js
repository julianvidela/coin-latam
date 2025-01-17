"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env = __importStar(require("env-var"));
exports.envs = {
    PORT: env.get("PORT").required().asPortNumber(),
    PROD: env.get("PROD").required().asBool(),
    MONGO_URI: env.get("MONGO_URI").required().asString(),
    MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
    MONGO_USER: env.get("MONGO_USER").required().asString(),
    MONGO_PASS: env.get("MONGO_PASS").required().asString(),
    MONGO_BASICAUTH: env.get("MONGO_BASICAUTH").required().asBool(),
    INITIALDROPDB: env.get("INITIALDROPDB").required().asBool(),
    CONNECTDB: env.get("CONNECTDB").required().asBool(),
    CLIENT_ID: env.get("CLIENT_ID").required().asString(),
    CLIENT_SECRET: env.get("CLIENT_SECRET").required().asString(),
    SESION_SECRET: env.get("SESION_SECRET").required().asString(),
    IPDATA_KEY: env.get("IPDATA_KEY").required().asString()
};
