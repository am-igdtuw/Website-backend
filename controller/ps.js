import PS from "../models/ps.js";


//Create Problem Statement
export const createPS = async (req,res) => {
    try{
      const newpsData = {
        domain: req.body.domain,
        pstitle: req.body.pstitle,
        psdesc: req.body.psdesc,
        locked: req.body.locked,
      };
  
      const ps = await PS.create(newpsData);
  
      res.status(201).json({
        success: true,
        message: "Problem Statement created ",
        ps
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get All Problem Statements
export const getallPS = async (req, res) => {
    try {
      const ps = await PS.find().sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        ps,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get Problem Statement randomly
export const getPS = async (req, res) => {
    try {
        const randomPS = await PS.aggregate([
          { $match: { locked: false } },
          { $sample: { size: 1 } },
        ]);
    
        res.status(200).json({
            success: true,
            data: randomPS[0],
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// Lock Problem Statement 
export const lockPS = async (req, res) => {
    const { psId, locked } = req.body;

    try {
        await PS.findByIdAndUpdate(psId, { locked });
        res.status(200).json({
            success: true,
            message: 'Problem Statement Assigned',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
