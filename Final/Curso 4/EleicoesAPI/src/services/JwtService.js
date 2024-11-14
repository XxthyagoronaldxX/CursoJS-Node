import jwt from "jsonwebtoken";
import AppError from "../error/AppError.js";
import HttpStatus from "../utils/HttpStatus.js";

export async function generate(payload) {
    const secret = process.env.JWT_SECRET;
    const expiresIn = process.env.JWT_EXPIRES_IN;

    return jwt.sign(payload, secret, { expiresIn: expiresIn });
}

export async function verifyAndGetPayload(token) {
    const secret = process.env.JWT_SECRET;

    try {
        if (token === undefined) {
            throw new AppError("O token não foi informado!", HttpStatus.UNAUTHORIZED);
        }

        if (token.indexOf("Bearer ") === -1) {
            throw new AppError("O token está com o formato inválido!", HttpStatus.UNAUTHORIZED);
        }

        const tokenReplaced = token.replace("Bearer ", "");

        const payload = await jwt.verify(tokenReplaced, secret);

        return payload;
    } catch (err) {
        throw new AppError("Token Error: " + err.message, HttpStatus.UNAUTHORIZED);
    }
}