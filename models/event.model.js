const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    campaignId: {type: [String], required: true, default: 'TBD'},
    title: {type: String},
    description: {type: [String]},
    enemies: { type: [String]},
    allies: { type: [String]},
    date: {type: String},
    stages: {type: [String]}, //Maybe use an object is strings get unweildy
    reference: {
        type: {type: String},
        id: {type: String}
    }
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;