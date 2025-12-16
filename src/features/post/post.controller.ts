import { Request, Response } from "express";
import { PostService } from "./post.service";

export class PostController {
    postService = new PostService();
    getPost = async (req: Request, res: Response) => {
        const posts = await this.postService.getAllPost();
        return res.status(200).json(posts);
    }
}