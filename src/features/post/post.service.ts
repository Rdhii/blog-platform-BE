import { PostRepository } from "./post.repository";

export class PostService {
    private postRepo = new PostRepository();

    async getAllPost() {
        return await this.postRepo.getAllPost();
    }
}