import { prisma } from "../../lib/prisma";

export class PostRepository {
    async getAllPost() {
        const post = await prisma.post.findMany();
        return post;
    }

    async getPostById(id: number) {
        const post = await prisma.post.findUnique({
            where: { id }
        });
        return post;
    }

    async createPost(data: {title: string; category:string; content:string; tags:string[]}) {
        const post = await prisma.post.create({
            data: {
                title: data.title,
                category: data.category,
                content: data.content,
                tags: data.tags
            }
        })
        return post;
    }

    async deletPost(id: number) {
        const post = await prisma.post.delete({
            where: { id }
        });
        return post;
    }

}