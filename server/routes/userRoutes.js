const express = require('express');
const { getUsers } = require('../controllers/getUsers');
const { addUser } = require('../controllers/addUser');
const { removeUser } = require('../controllers/removeUser');
const { updateUser } = require('../controllers/updateUser');
const router = express.Router();

router.get("/users", getUsers);
router.post("/users/addUser", addUser);
router.delete("/users/deleteUser/:id", removeUser);
router.put('/users/editUser/:id', updateUser);

module.exports = router;