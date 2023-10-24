import {createPS, getPS, getallPS,lockPS } from "../controller/ps.js";
import express from "express";


const router = express.Router();


router.post("/create", createPS);    

router.post("/lock", lockPS);      

router.get("/", getallPS);

router.get("/random", getPS);

export default router;