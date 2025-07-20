const express = require('express');
const router = express.Router();
const authMiddleware=require('../middleware/auth');
const {
  createPerspective,
  getAllPerspectives,
  deletePerspective,
} = require('../controllers/perspectiveController');

// Public route — get all perspectives
router.get('/', getAllPerspectives);

// Protected routes — require auth
router.post('/', authMiddleware, createPerspective);
router.delete('/:id', authMiddleware, deletePerspective);

module.exports = router;
