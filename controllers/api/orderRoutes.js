import express from "express";
const router = express.Router();
import { order } from "../../models/index.js"

router.post("/", async (req, res) => {
    try {
        const newOrder =await order.create({
            user_id: req.session.user_id
        })
        res.status(200).json(newOrder)
    } catch (err) {
		res.status(400).json(err)
	}
})

router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await order.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(400).json(err);
    }
})

export default router;