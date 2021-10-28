import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
    constructor(
        private getUserUseCase: GetUserUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const user = await this.getUserUseCase.execute(id);
            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Erro"
            });
        }
    }
}