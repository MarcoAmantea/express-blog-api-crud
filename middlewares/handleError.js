const handleError = (err, req, res, next) => {
    res.statusCode = 404
    res.json({
        error: true,
        message: "errore interno!"
    })
    next()
    
    
    
}
module.exports = handleError;