import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute() {
       const users = await this.usersRepository.getAll();

       if(!users) {
           throw new Error('User not found');
       }
       return users;
    }
}