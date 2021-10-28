import { request, response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getAllUsersController } from "./useCases/GetAllUsers";
import { getUserController } from "./useCases/GetUser";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.get('/users/:id', (request, response) => {
    return getUserController.handle(request, response);
});

router.get('/users', (request, response) => {
    return getAllUsersController.handle(request, response);
});

export { router }