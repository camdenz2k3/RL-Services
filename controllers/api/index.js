import express from "express";
const router = express.Router();
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import orderoptionsRoutes from "./orderoptionstRoutes.js";


router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/orderoptions", orderoptionsRoutes);

export default router;
