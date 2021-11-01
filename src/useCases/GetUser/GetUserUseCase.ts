import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async executeById(id: string) {
       const user = await this.usersRepository.findById(id);
       if(!user) {
           throw new Error('User not found');
       }
       return user;
    }

    async executeByEmail(email: string) {
        const user = await this.usersRepository.findByEmail(email);
        if(!user) {
            throw new Error('User not found');
        }
        return user;
    }
}