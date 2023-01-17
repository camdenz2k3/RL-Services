import express from "express";
const router = express.Router();
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoutes.js";
import productRoutes from "./productRoutes.js";
import serviceRoutes from "./serviceRoutes.js";


router.use("/users", userRoutes);
router.use("/order", orderRoutes);
router.use("/product", productRoutes);
router.use("/service", serviceRoutes);

export default router;
