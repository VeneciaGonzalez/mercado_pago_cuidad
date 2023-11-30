import { Router } from "express";
import { createOrder, receiveWebhook, successHandler } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-order", createOrder);
router.post("/webhook", receiveWebhook);
router.get("/success", successHandler);

export default router;
