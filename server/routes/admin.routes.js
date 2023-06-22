const { adminRegister, updateUser, deleteUser, adminLogin } = require("../controllers/admin.controllers");

const express = require("express");
const router = express.Router();

router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);
// router.post("/admin/add", addAdmin);
router.put("/admin/update", updateUser);
router.delete("/admin/delete", deleteUser);

module.exports = router;