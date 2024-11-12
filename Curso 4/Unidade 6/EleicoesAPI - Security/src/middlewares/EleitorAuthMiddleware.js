import HttpStatus from "../utils/HttpStatus.js";

const EleitorAuthMiddleware = (req, res, next) => {
    const authType = req.get("AuthType");

    if (authType === "eleitor") {
        console.log("[EleitorAuthMiddleware] :: Success.");
        next();
    } else {
        return res.status(HttpStatus.UNAUTHORIZED).json("Não autorizado!");
    }
}

export default EleitorAuthMiddleware;