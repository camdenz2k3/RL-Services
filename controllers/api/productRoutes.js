import express from "express";
import { product } from "../../models"
const router = express.Router();

router.put("/", async (req, res) => {
    try {
        const products =await product.update({

        })
        res.status(200).json(products)
    } catch (err) {
		res.status(500).json(err)
	}
})


export default router;