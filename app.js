const express = require("express");
const app = express();
const posts = require("./data/posts");
const router = require("./routers/posts")
const checkPost = require("./middlewares/postsexist")
const handleError = require("./middlewares/handleError")
app.use(express.json())
app.use(express.static("public"))
app.use("/posts", router)

app.get("/", (req,res) => {
    console.log("rotta home è stata chiamata");
    
    res.json("PROVA POSTMAN")
})

app.use(handleError);
app.listen(3000 , () => {
    console.log("Il server è partito!");
})