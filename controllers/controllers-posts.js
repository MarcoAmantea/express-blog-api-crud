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
        if(curPost.id === postId){
            res.json(curPost)
        }else{
            res.statusCode = 404;
            res.json({
                error: true,
                message: "Post non trovato"
    
            })
        }
    });
    
};

//DESTROY
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((curPost) => curPost.id === postId);
    if(postIndex === -1){
        res.statusCode = 404;
        res.json({
            error: true,
            message: "POST NON TROVATO"
        })
    }else{
        posts.splice(postIndex,1);
        res.sendStatus(204);
        console.log(posts);
    }
}

//CREATE
const store = (req, res) => {
    console.log(req.body);
    const newPost = req.body
    //calcolo il successivo id
    newPost.id = posts[posts.length -1].id +1
    posts.push(newPost)
    
    
    res.json(newPost);
}

//UPDATE
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const newData = req.body;
    const index = posts.findIndex((curIndex) => curIndex.id === postId);
    console.log(index);
    if(index === -1){
        res.sendStatus(404),
        res.json({
            message: "POST NON TROVATO"
        })
    }else{
        posts[index] = newData;   
    res.json({
        updatedPost: newData
    })
    }
}

//MODIFY
const modify = (req, res) => {
    const postId = req.params.id
    res.json("modifichiamo solo alcuni dati dell'oggetto con id numero " + postId)
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}