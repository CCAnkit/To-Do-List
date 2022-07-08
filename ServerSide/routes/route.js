const express = require("express");
const router = express.Router();

const { fetchUser, loginUser, registerUser, verifyOTP } = require("../controllers/authControllers.js");

const { createList, deleteList } = require("../controllers/ToDoControllers.js");

const checkAuth = require("../middlewares/checkAuth.js");


// Mobile Login API's
router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/verify", verifyOTP);

router.get("/me", checkAuth, fetchUser);


// To-Do List API's
router.post("/create", createList);

router.delete("/delete", deleteList);


module.exports = router;