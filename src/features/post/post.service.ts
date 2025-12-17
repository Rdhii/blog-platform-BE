import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPost() {
        return await this.postRepo.getAllPost();
    }

    async createPost(data: {title: string; category:string; content:string; tags:string[]}) {
        return await this.postRepo.createPost(data);
    }
}