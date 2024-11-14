import * as eleitorRepository from "../repository/EleitorRepository.js";
import RoleEnum from "./RoleEnum.js";
import bcrypt from "bcrypt";

export default class DebugUtil {
    static async genAdmin() {
        const admin = {
            nome: "Thyago",
            cpf: "admin",
            senha: await bcrypt.hash("admin", 10)
        }

        const eleitorByCpf = await eleitorRepository.findEleitorByCpf(admin.cpf);
    
        if (!eleitorByCpf) {
            eleitorRepository.saveEleitor(admin, RoleEnum.ADMIN);
        }
    }
}