import express from "express";
const router = express.Router();
import { order } from "../../models/index.js"

router.post("/", async (req, res) => {
    try {
        const neworder =await order.create({
            user_id

        })
        res.status(200).json(neworder)
    } catch (err) {
		res.status(500).json(err)
	}
})


export default router;