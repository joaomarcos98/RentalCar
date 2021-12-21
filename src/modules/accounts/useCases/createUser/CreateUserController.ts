/**@name Dependecies */
import { container } from "tsyringe";
import { Request, Response } from "express";
/**@name UseCase */
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            username,
            email,
            password,
            driver_license
        } = req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name,
            username,
            email,
            password,
            driver_license
        })

        return res.status(201).send();
    }
}

export { CreateUserController };
