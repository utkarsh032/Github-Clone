import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    default: ''
  },
  profileUrl: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
  },
  likedProfiles: {
    type: [String],
    default: []
  },
  likedBy: [
    {
      username: {
        type: String,
        required: true
      },
      avatarUrl: {
        type: String,
      },
      likedDate: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema)
export default User
