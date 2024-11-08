const LogMiddleware = (req, res, next) => {
    console.log(`[LogMiddleware] :: ${req.method} - ${req.originalUrl}`);
    next();
}

export default LogMiddleware;