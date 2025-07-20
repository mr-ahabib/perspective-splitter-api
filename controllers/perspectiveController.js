const Perspective = require('../models/perspective.model');

// Create a new perspective (only for authenticated user)
exports.createPerspective = async (req, res) => {
  const userEmail = req.userEmail; // From authMiddleware
  const { title, perspective } = req.body;

  if (!title || !perspective) {
    return res.status(400).json({ message: 'Title and perspective are required' });
  }

  try {
    const newPerspective = await Perspective.create({
      user_email: userEmail,
      title,
      perspective,
    });

    res.status(201).json(newPerspective);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create perspective', error: error.message });
  }
};

// Show all perspectives (public)
exports.getAllPerspectives = async (req, res) => {
  try {
    const perspectives = await Perspective.findAll();
    res.json(perspectives);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch perspectives', error: error.message });
  }
};

// Delete a perspective (only owner can delete)
exports.deletePerspective = async (req, res) => {
  const userEmail = req.userEmail; // From authMiddleware
  const { id } = req.params;

  try {
    const perspective = await Perspective.findOne({ where: { id } });

    if (!perspective) {
      return res.status(404).json({ message: 'Perspective not found' });
    }

    if (perspective.user_email !== userEmail) {
      return res.status(403).json({ message: 'Forbidden: You can only delete your own perspectives' });
    }

    await perspective.destroy();
    res.json({ message: 'Perspective deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete perspective', error: error.message });
  }
};
