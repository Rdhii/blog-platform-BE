import { Request, Response, Router } from "express";
import postRouter from "../features/post/post.router";

const router = Router();


router.get('/', (req: Request, res: Response) => {
    res.send('hello world');
})

router.use('/post', postRouter)

export default router;