import {createCollaborateForm, createFaqQuery, createSponsorForm, getallCForms, getallSForms, getallfaq} from "../controller/formController.js";
import express from "express";


const router = express.Router();


router.post("/collaborate", createCollaborateForm);    // https://am-website-w70g.onrender.com/api/collaborate

router.post("/sponsor", createSponsorForm);    // https://am-website-w70g.onrender.com/api/sponsor

router.post("/faq", createFaqQuery);   //https://am-website-w70g.onrender.com/api/faq

router.get("/collaborate", getallCForms);

router.get("/sponsor", getallSForms);

router.get("/faq", getallfaq);


export default router;