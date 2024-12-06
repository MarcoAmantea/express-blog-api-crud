const posts = require("../data/posts");
const router = require("../routers/posts");
const express = require("express");

//INDEX
const index = (req, res) => {
    const query = req.query.tags;
    if (query === undefined) {
        res.json({
            postsList: posts,
            totalePosts: posts.length
        })
    } else {
        const result = posts.filter((curPost) => curPost.tags.includes(query));
        res.json({
            searchedPost: result,
            totalePosts: result.length
        })
    }
};

//SHOW
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const postDetail = posts.filter((curPost) => curPost.id === postId);
    res.json(postDetail);
};


//DESTROY
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((curPost) => curPost.id === postId);
    posts.splice(postIndex, 1);
    res.sendStatus(204);
    console.log(posts);

}

//CREATE
const store = (req, res) => {
    console.log(req.body);
    const newPost = req.body
    //calcolo il successivo id
    newPost.id = posts[posts.length - 1].id + 1
    posts.push(newPost)
    res.json(newPost);
}

//UPDATE
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const newData = req.body;
    const index = posts.findIndex((curIndex) => curIndex.id === postId);
    console.log(index);
    posts[index] = newData;
    res.json({
        updatedPost: newData
    })

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