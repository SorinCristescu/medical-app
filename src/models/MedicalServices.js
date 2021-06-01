import mongoose from 'mongoose';

/* MedicalServicesSchema will correspond to a collection in your MongoDB database. */
const MedicalServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please specify the species of your pet.'],
  },
});

export default mongoose.models.MedicalServices ||
  mongoose.model('MedicalServicesSchema', MedicalServicesSchema);
