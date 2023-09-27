import express from "express";
import { createCareer, createContact, createPartner } from "../Controllers/Form.js";
const router = express.Router();


router.post("/contact", createContact)
router.post("/career", createCareer)
router.post("/partner", createPartner)

export default router;