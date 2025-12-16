import { Request, Response, Router } from "express";
import { PostController } from "./post.controller";

const postRouter = Router();
const postController = new PostController();


postRouter.get('/', (req: Request, res: Response) => {
    res.send('hello post');
})

postRouter.get('/all', postController.getPost);

export default postRouter;