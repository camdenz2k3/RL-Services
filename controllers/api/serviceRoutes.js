import express from "express";
import { Sequelize } from "sequelize";
const router = express.Router();
import { service } from "../../models"


router.("/", async (req, res) => {
    try {
        const services =await service.findAll();
        if (services.length === 0) {
            res.status(404).send(`<h1>404 Data Not Found!</h1>
            <h3>No Categories Available</h3>`);
			return;
        }
        res.status(200).json(services).send();
    } catch (err) {
		console.error(err);
		res.status(500).send(`<h1>500 Internal Server Error</h1>`);
	}
});

export default router;