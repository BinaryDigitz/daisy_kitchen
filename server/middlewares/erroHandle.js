export function errorHandler(err, req, res,next){
    const statusCode= err.statusCode || 500
    const message = err.message || 'Internal server error.'

    console.log(message, err)
    return res.json({ success: false, statusCode, message})

    next()
}