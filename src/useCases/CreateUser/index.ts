import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { MongoUsersRepository } from "../../repositories/implementations/Mongo/MongoUsersRepository";

import { CrateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    mongoUsersRepository,
    mailTrapMailProvider
);

const createUserController = new CrateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }