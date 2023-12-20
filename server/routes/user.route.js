const router = require("express").Router();
const passport = require("passport");
const useragent = require("express-useragent");
const requestIp = require("request-ip");

const {
  addUser,
  signin,
  logout,
  refreshToken,
  getModProfile,
  getUser,
  updateInfo,
} = require("../controllers/user.controller");

const {
  getPublicUsers,
  followUser,
  getPublicUser,
  unfollowUser,
  getFollowingUsers,
  } = require("../controllers/profile.controller");

const {
  addUserValidator,
  addUserValidatorHandler,
} = require("../middlewares/users/usersValidator");