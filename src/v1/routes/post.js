const express = require('express')
const router = express.Router()

const  postController = require("../../controllers/postController.js")

router 
    .get("/", postController.getAllposts)
    .get("/:id", postController.getOnepost)
    .post("/", postController.createNewpost)
    .put("/:id", postController.updatepost)
    .delete("/:id", postController.deletepost)

module.exports = router