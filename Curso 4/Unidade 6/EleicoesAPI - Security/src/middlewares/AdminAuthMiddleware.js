import HttpStatus from "../utils/HttpStatus.js";

const AdminAuthMiddleware = (req, res, next) => {
    const authType = req.get("AuthType");

    if (authType === "admin") {
        console.log("[AdminAuthMiddleware] :: Success.");
        next();
    } else {
        return res.status(HttpStatus.UNAUTHORIZED).json("Não autorizado!");
    }
}

export default AdminAuthMiddleware;