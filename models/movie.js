const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./category');
const Actor = require('./actor');
const Advisory = require('./advisory');

const movieSchema = new Schema({
    title: {type: String},
    tagline: {type: String},
    overview: {type: String},
    released: {type: Date},
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
    mpaaRating: {type: String},
    length: {type: String},
    poster: {type: String},
    cast: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
    tmdbIDRef: {type: Number},
    mecRatingAgg: [{
        advisory: {type: Schema.Types.ObjectId, ref: 'Advisory'},
        score: {type: Number}
    }],
    mecUserRating: [{
        advisory: {type: Schema.Types.ObjectId, ref: 'Advisory'},
        score: {type: Number}
    }],
    favorite: {type: Boolean},
    owned: {type: Boolean},
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);