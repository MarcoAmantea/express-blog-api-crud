const posts = require("../data/posts");
const router = require("../routers/posts");
const express = require("express");

const index = (req, res) => {
    res.json({
        postsList: posts,
        totalePosts: posts.length
    })
};

const show = (req, res) => {
    const postId = parseInt(req.params.id);    
    const postDetail = posts.filter((curPost) => {
        return curPost.id === postId
    });
    res.json(postDetail);
}



module.exports = {
    index,
    show
}