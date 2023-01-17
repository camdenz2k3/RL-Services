import express from "express";
const router = express.Router();
import apiRoutes from "./api/index.js";
import homeRoutes from "./homeRoutes.js";

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

export default router;
