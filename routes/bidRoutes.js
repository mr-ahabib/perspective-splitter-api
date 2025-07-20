const express = require('express');
const router = express.Router();
const authMiddleware=require('../middleware/auth');
const {
  createBid,
  getAllBids,
  deleteBid,
} = require('../controllers/perspectivebidController');

router.get('/', getAllBids);

router.post('/:pers_id', authMiddleware, createBid);
router.delete('/:id', authMiddleware, deleteBid);

module.exports = router;
