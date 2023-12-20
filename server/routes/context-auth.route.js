const router = require("express").Router();
const passport = require("passport");
const useragent = require("express-useragent");

const {
  addContextData,
  getAuthContextData,
  getTrustedAuthContextData,
  getUserPreferences,
  getBlockedAuthContextData,
  deleteContextAuthData,
  blockContextAuthData,
  unblockContextAuthData,
} = require("../controllers/auth.controller");

const {
    verifyEmailValidation,
    verifyEmail,
  } = require("../middlewares/users/verifyEmail");