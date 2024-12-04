const express = require("express");
const router = express.Router();
const posts = require("../data/posts")
const controllerPosts = require("../controllers/controllers-posts")

//INDEX
router.get("/", controllerPosts.index)

//SHOW
router.get("/:id", controllerPosts.show)

//CREATE
router.post("/", controllerPosts.create)

//UPDATE
router.put("/:id", controllerPosts.update)
//MODIFY
router.patch("/:id", controllerPosts.modify)
//DESTROY
router.delete("/:id", controllerPosts.destroy)
module.exports = router;