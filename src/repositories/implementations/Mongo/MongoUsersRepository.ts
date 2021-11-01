import { User } from "../../../entities/User";
import { IUsersRepository } from "../../IUsersRepository";
import { UserSchema } from "./UserSchema";

export class MongoUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        const user: User = await UserSchema.findOne({email: email}).exec();
        return user;
    }

    async findById(id: string): Promise<User> {
        const user: User = await UserSchema.findOne({id: id}).exec();
        return user;
    }

    async save(user: User): Promise<void> {
        try {
            await UserSchema.create(user);
        } catch(err) {
            throw new Error(err);
        }
    }

    async getAll(): Promise<User[]> {
        return await UserSchema.find().exec();
    }
}