const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const Actor = require('./actor');
const Movie = require('./movie');
const Show = require('./show');
const Viewer = require('./viewer');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  viewerProfiles: [{type: Schema.Types.ObjectId, ref: 'Viewer'}],
  favoriteMovies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
  favoriteShows: [{type: Schema.Types.ObjectId, ref: 'Show'}],
  favoriteActors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);