require("dotenv").config();
const express = require("express");

const app = express();

const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
