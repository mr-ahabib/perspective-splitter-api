const Perspective_Bid=require('../models/perspectivebid.model');

exports.createBid=async(req,res)=>{
    const userEmail = req.userEmail;
    const {pers_id}=req.params;
    const{perspective}=req.body;
    try {
        const newBid = await Perspective_Bid.create({
      user_email: userEmail,
      pers_id,
      perspective,
    });

    res.status(201).json(newBid);
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to create perspective bid', error: error.message });
    }
};

exports.getAllBids=async(req,res)=>{
    try {
    const bids = await Perspective_Bid.findAll();
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch perspective bids', error: error.message });
  }

};


exports.deleteBid = async (req, res) => {
  const userEmail = req.userEmail; 
  const { id } = req.params;

  try {
    const bid = await Perspective_Bid.findOne({ where: { id } });

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    if (bid.user_email !== userEmail) {
      return res.status(403).json({ message: 'Forbidden: You can only delete your own Bid' });
    }

    await bid.destroy();
    res.json({ message: 'Bid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete bid', error: error.message });
  }
};