const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Advisory = require('./advisory');

const viewerSchema = new Schema({
    name: {type: String},
    preferences: [{
        advisory: {type: Schema.Types.ObjectId, ref: 'Advisory'},
        scoreMin: {type: Number, default: 0},
        scoreMax: {type: Number, default: 5},
        importance: {type: String, enum: ['---', 'Low', 'Medium', 'High']}
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Viewer', viewerSchema);