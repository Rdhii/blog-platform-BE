import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPost(search?: string) {
        return await this.postRepo.getAllPost(search);
    }

    async getPostById(id: number) {
        return await this.postRepo.getPostById(id);
    }

    async createPost(data: {title: string; category:string; content:string; tags:string[]}) {
        return await this.postRepo.createPost(data);
    }

    async deletePost(id: number) {
        return await this.postRepo.deletPost(id);
    }

    async updatePost(id: number, data: {title?: string; category?:string; content?:string; tags?:string[]}) {
        return await this.postRepo.updatePost(id, data);
    }
}