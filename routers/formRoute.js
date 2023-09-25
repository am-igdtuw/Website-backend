import {createCollaborateForm, createFaqQuery, createSponsorForm, getallCForms, getallSForms, getallfaq} from "../controller/formController.js";
import express from "express";


const router = express.Router();


router.post("/collaborate", createCollaborateForm);

router.post("/sponsor", createSponsorForm);

router.post("/faq", createFaqQuery);

router.get("/collaborate", getallCForms);

router.get("/sponsor", getallSForms);

router.get("/faq", getallfaq);


export default router;