import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  benefits: [{
    type: String,
  }],
  image: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema); 