import { Request, Response } from "express";
import { PostService } from "./post.service";

export class PostController {
    postService = new PostService();
    getPost = async (req: Request, res: Response) => {
        const posts = await this.postService.getAllPost();
        return res.status(200).json(posts);
    }

    getPostById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const post = await this.postService.getPostById(id);
        return res.status(200).json(post);
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

    deletePost = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const deletedPost = await this.postService.deletePost(id);
        return res.status(200).json({
            message: "Post deleted successfully",
            data: deletedPost
        });
    }
}