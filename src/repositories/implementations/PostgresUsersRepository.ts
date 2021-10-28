import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private props = {
        name: 'teste',
        email: 'diego@test.com',
        password: '1234'
    }
    private firstUser = new User(this.props, 'ed52ecdb-ff45-481d-92bb-07a93f327185');
    private users: User[] = [this.firstUser];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id);
        console.log('findById');
        console.log(user);
        return user;
    }

    async save(user: User): Promise<void> {
        console.log('PostgresUsersRepository save');
        console.log(user);
        this.users.push(user);
    }

    async getAll(): Promise<User[]> {
        console.log('getAll');
        this.users.forEach(user => {
            console.log(user);
        });
        return this.users;
    }
}