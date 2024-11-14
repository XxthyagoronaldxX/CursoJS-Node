import AppError from "../error/AppError.js";
import HttpStatus from "../utils/HttpStatus.js";
import * as jwtService from "../services/JwtService.js";
import RoleEnum from "../utils/RoleEnum.js";

const AdminAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.get("Authorization");

        const payload = await jwtService.verifyAndGetPayload(token);

        if (payload.role === RoleEnum.ADMIN) {
            console.log("[AdminAuthMiddleware] :: Success.");
            req.userId = payload.userId;
            next();
        } else {
            return res.status(HttpStatus.UNAUTHORIZED).json("Sem permissão para acessar essa feature!");
        }
    } catch(err) {
        if (err instanceof AppError) {
            return res.status(err.code).json(err.message);
        }

        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
}

export default AdminAuthMiddleware;