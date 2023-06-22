const express = require("express");
const { userRegister, userLogin, update, singleUser, allUsers, deleteUser } = require("../controllers/user.controllers");
const router = express.Router();

router.get("/alluser", allUsers);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);
router.get("/user/:id", singleUser);
// router.post("/user/add", addAdmin);
router.put("/user/update/:id", update);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
