import express from "express";
const router = express.Router();
import userRoutes from "./userRoutes";
import orderRoutes from "./orderRoutes";
import productRoutes from "./productRoutes";
import serviceRoutes from "./serviceRoutes";


router.use("/users", userRoutes);
router.use("/order", orderRoutes);
router.use("/product", productRoutes);
router.use("/service", serviceRoutes);

export default router;
