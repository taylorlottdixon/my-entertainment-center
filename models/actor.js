const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./movie');
const Show = require('./show');

const actorSchema = new Schema({
    name: {type: String},
    biography: {type: String},
    knownFor: [{type: [Schema.Types.ObjectId], refPath: 'model_type'}],
    filmography: [{type: [Schema.Types.ObjectId], refPath: 'model_type'}],
    model_type: {type: String, enum: ['Movie', 'Show']},
    image: {type: String},
    credits: [{type: [Schema.Types.ObjectId], refPath: 'model_type'}],
    birthdate: {type: Date},
    placeOfBirth: {type: String},
    alias: [{type: String}],
    favorite: {type: Boolean},
    tmdbIDRef: {type: Number},
})

module.exports = mongoose.model('Actor', actorSchema);