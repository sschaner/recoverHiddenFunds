import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import reviews from './data/reviews.js';
import Review from './models/reviewModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Review.deleteMany();

    const sampleReviews = reviews.map((review) => {
      return { ...review };
    });

    await Review.insertMany(sampleReviews);

    console.log('Data imported.'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Review.deleteMany();

    await Review.insertMany(sampleReviews);

    console.log('Data destroyed.'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
