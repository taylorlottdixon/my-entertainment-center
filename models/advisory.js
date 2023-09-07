const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advisorySchema = new Schema({
    name: {type: String},
    ratingRange: [{
        score: {type: Number, enum: [0,1,2,3,4,5]},
        description: {type: String}
    }],
    icon: {type: String}
})

module.exports = mongoose.model('Advisory', advisorySchema);