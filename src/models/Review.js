import mongoose from 'mongoose';

/* ReviewSchema will correspond to a collection in your MongoDB database. */
const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [100, 'Species specified cannot be more than 40 characters'],
  },
  text: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please add a rating between 1 and 10.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  medical_record: {
    type: mongoose.Schema.ObjectId,
    ref: 'MedicalRecord',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.models.Review ||
  mongoose.model('ReviewSchema', ReviewSchema);
