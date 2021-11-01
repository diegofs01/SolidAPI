import { MongoUsersRepository } from "../../repositories/implementations/Mongo/MongoUsersRepository";
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

const mongoUsersRepository = new MongoUsersRepository();

const getAllUsersUseCase = new GetAllUsersUseCase(
    mongoUsersRepository
)

const getAllUsersController = new GetAllUsersController (
    getAllUsersUseCase
)

export { getAllUsersUseCase, getAllUsersController }