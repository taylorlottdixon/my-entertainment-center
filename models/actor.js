const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./movie');
const Show = require('./show');

const actorSchema = new Schema({
    name: {type: String},
    biography: {type: String},
    knownFor: [{type: [Schema.Types.ObjectId], refPath: 'model_type'}],
    filmography: [{type: [Schema.Types.ObjectId], refPath: 'model_type'}],
    model_type: {type: String, enum: ['Movie', 'Show']}
})

module.exports = mongoose.model('Actor', actorSchema);