import express from "express";
const router = express.Router();
import { service } from "../../models"


router.put("/", async (req, res) => {
    try {
        const services =await service.update({

        });
        res.status(200).json(services)
    } catch (err) {
		res.status(500).json(err)
	}
});

export default router;