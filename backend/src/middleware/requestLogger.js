const requestLogger = (req, res, next) => {
    console.log(`[Req] ${req.method}, ${req.url}`);
    next()
}

export default requestLogger;