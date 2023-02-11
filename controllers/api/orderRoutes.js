import express from "express";
const router = express.Router();
import { orderInfo, User, orderOptions } from "../../models/index.js"

router.post("/", async (req, res) => {
    try {
        const createOrder =await orderInfo.create({
            name: req.body.name,
            orderoptions_id: 1,
            user_id: req.session.user_id
        })
        res.status(200).json(createOrder)
    } catch (err) {
		res.status(400).json(err)
	}
})

router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await orderInfo.update(req.body, {
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