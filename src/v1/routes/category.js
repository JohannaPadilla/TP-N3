const express = require('express')
const router = express.Router()

const  categoryController = require("../../controllers/categoryController.js")

router 
    .get("/", categoryController.getAllcategorys)
    .get("/:id", categoryController.getOnecategory)
    .post("/", categoryController.createNewcategory)
    .put("/:id", categoryController.updatecategory)
    .delete("/:id", categoryController.deletecategory)

module.exports = router