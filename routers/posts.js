const express = require("express");
const router = express.Router();
const posts = require("../data/posts")
const controllerPosts = require("../controllers/controllers-posts")
const checkPost = require("../middlewares/postsexist");

//INDEX
router.get("/", controllerPosts.index)

//SHOW
router.get("/:id", checkPost, controllerPosts.show)

//CREATE
router.post("/", controllerPosts.store)

//UPDATE
router.put("/:id",checkPost, controllerPosts.update)

//MODIFY
router.patch("/:id",checkPost, controllerPosts.modify)

//DESTROY
router.delete("/:id",checkPost, controllerPosts.destroy)

module.exports = router;