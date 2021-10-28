import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
    constructor(
        private getAllUsersUseCase: GetAllUsersUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.getAllUsersUseCase.execute();
            return response.status(200).json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro"
            });
        }
    }
}