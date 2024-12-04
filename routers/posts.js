const express = require("express");
const router = express.Router();
const posts = require("../data/posts")
const controllerPosts = require("../controllers/controllers-posts")

//INDEX
router.get("/", controllerPosts.index)

//SHOW
router.get("/:id", controllerPosts.show)

//CREATE
router.post("/", (req, res) => {
    res.json("aggiungiamo un nuovo elemento")
})

//UPDATE
router.put("/:id", (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo tutti i dati dell'oggetto con id numero " + postId)
})
//MODIFY
router.patch("/:id", (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo solo alcuni dati dell'oggetto con id numero " + postId)
})
//DESTROY
router.delete("/:id", (req, res) => {
    const postId = req.params.id
    res.json("eliminiamo i dati dell'oggetto con id numero " + postId)
})
module.exports = router;