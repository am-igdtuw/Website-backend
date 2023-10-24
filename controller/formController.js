import Collaborate from "../models/collaborate.js";
import Faq from "../models/faq.js";
import Sponsor from "../models/sponsor.js";


//Create Collaborate Form
export const createCollaborateForm = async (req,res) => {
    try{
      const newCFormData = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contactNumber,
        organization: req.body.organization,
        message: req.body.message,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
      };
  
      const cform = await Collaborate.create(newCFormData);
  
      res.status(201).json({
        success: true,
        message: "Collaboration request sent successfully",
        cform
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Create Sponsor Form
export const createSponsorForm = async (req,res) => {
    try{
      const newSFormData = {
        name: req.body.name,
        email: req.body.email,
        altEmail: req.body.altEmail,
        company: req.body.company,
        contactNumber: req.body.contactNumber,
        message: req.body.message,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
      };
  
      const sform = await Sponsor.create(newSFormData);
  
      res.status(201).json({
        success: true,
        message: "Sponsorship request sent successfully",
        sform
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Create Faq Query
export const createFaqQuery = async (req,res) => {
    try{
      const newfaqData = {
        email: req.body.email,
        message: req.body.message,
      };
  
      const faq = await Faq.create(newfaqData);
  
      res.status(201).json({
        success: true,
        message: "Query sent successfully",
        faq
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get All Collaborate Forms
export const getallCForms = async (req, res) => {
    try {
      const collaborateForms = await Collaborate.find().sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        collaborateForms,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get All Sponsor Forms
export const getallSForms = async (req, res) => {
    try {
      const sponsorForms = await Sponsor.find().sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        sponsorForms,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get All Faq Queries
export const getallfaq = async (req, res) => {
    try {
      const faq = await Faq.find().sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        faq,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};
  
  
  
  
  
  