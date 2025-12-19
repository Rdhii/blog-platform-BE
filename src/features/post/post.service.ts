import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPost() {
        return await this.postRepo.getAllPost();
    }

    async getPostById(id: number) {
        return await this.postRepo.getPostById(id);
    }

    async createPost(data: {title: string; category:string; content:string; tags:string[]}) {
        return await this.postRepo.createPost(data);
    }
}