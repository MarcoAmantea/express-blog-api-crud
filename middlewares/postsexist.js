const posts = require("../data/posts")

const checkPostExist = (req, res, next) => {
    console.log(checkPostExist);

    const postId = parseInt(req.params.id);
    const postFind = posts.find(curPost => curPost.id === postId)
    if (postFind !== undefined) {
        next();
    } else {
        res.statusCode = 404
        res.json({
            error: true,
            message: "catena non trovata"
        })
    }
}

module.exports = checkPostExist