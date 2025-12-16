import { prisma } from "../../lib/prisma";

export class PostRepository {
    async getAllPost() {
        const post = await prisma.post.findMany();
        return post;
    }
}