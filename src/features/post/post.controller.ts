import { Request, Response } from "express";
import { PostService } from "./post.service";

export class PostController {
    postService = new PostService();
    getPost = async (req: Request, res: Response) => {
        const posts = await this.postService.getAllPost();
        return res.status(200).json(posts);
    }

    createPost = async (req: Request, res: Response) => {
        try {
            const { title, category, content, tags } = req.body;

            if (!title || !category || !content || !tags) {
                return res.status(400).json({
                    error: "Missing required fields"
                });
            }

            const newPost = await this.postService.createPost({ title, category, content, tags: tags || [] });

            return res.status(201).json({
                message: "Post created successfully",
                data: newPost
            });
        } catch (error) {
            return res.status(500).json({
                error: "Gagal membuat post"
            })
        }
    } 
}