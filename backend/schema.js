import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  moment: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);
export default User; // Changed to ES module export