import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("Inside express router");
    res.status(200).send("hello");
});

export default router;
