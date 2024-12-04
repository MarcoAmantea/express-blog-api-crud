const posts = require("../data/posts");
const router = require("../routers/posts");
const express = require("express");

//INDEX
const index = (req, res) => {
    res.json({
        postsList: posts,
        totalePosts: posts.length
    })
};

//SHOW
const show = (req, res) => {
    const postId = parseInt(req.params.id);    
    const postDetail = posts.filter((curPost) => {
        return curPost.id === postId
    });
    res.json(postDetail);
};

//DESTROY
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((curPost) => curPost.id === postId);
    if(postIndex){
        posts.splice(postIndex,1);
        res.sendStatus(204);
        console.log(posts);
    }
}

//CREATE
const create = (req, res) => {
    res.json("aggiungiamo un nuovo elemento")
}

//UPDATE
const update = (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo tutti i dati dell'oggetto con id numero " + postId)
}

//MODIFY
const modify = (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo solo alcuni dati dell'oggetto con id numero " + postId)
}



module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}