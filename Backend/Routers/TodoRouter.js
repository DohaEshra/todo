const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/TodoController");
const{body, param, query} = require("express-validator");

router.route("/Todo")
.post([
    body("Task").isString().withMessage("Task should be a String"),
    body("User").isNumeric().withMessage("User is Required")
], controller.AddTodo)
.put([
    body("Id").isNumeric().withMessage("Id is Required"),
    body("Task").isString().withMessage("Task should be a String"),
    body("User").isNumeric().withMessage("User is Required")
], controller.UpdateTodo)
router.delete("/Todo/:id",controller.DeleteTodo)
.get("/Todo/", controller.getTodo)//func5
router.get("/Todo/:user", controller.getTodos)

module.exports=router;