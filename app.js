const express = require("express");
const app = express();
const posts = require("./data/posts");
const router = require("./routers/posts")

app.use(express.static("public"))
app.use("/posts", router)

app.get("/", (req,res) => {
    res.json("PROVA POSTMAN")
})

app.listen(3000 , () => {
    console.log("Il server è partito!");
})