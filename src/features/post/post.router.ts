import { Request, Response, Router } from "express";
import { PostController } from "./post.controller";

const postRouter = Router();
const postController = new PostController();


postRouter.get("/", postController.getPost);

postRouter.get("/:id", postController.getPostById);

postRouter.post("/", postController.createPost);

export default postRouter;
