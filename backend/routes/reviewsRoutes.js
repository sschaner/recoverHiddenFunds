import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Review from '../models/reviewModel.js';

// @desc    Fetch all reviews
// @route   GET /api/reviews
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const reviews = await Review.find({});

    res.json(reviews);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.id);

    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ message: 'Review not found.' });
    }
  })
);

export default router;
