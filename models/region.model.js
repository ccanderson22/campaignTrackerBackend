const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
    campaignId: {type: String, required: true, default: 'TBD'},
    name: {type: String, required: true},
    government: {type: String, required: true},
    description: {type: [String], required: true},
    ruler: {type: String, required: true},
    religions: {type: [String]},
    country: {type: String, required: true },
    locations: {type: [String], required: true},//Certain locations in the region
    customs: {type: [String] },
    population: {
        total: {type: Number, required: true},
        perRace: {type: [Object], required: true}//Object hold race and its percentage of population
    } 
})

const Region = mongoose.model('Region', regionSchema);

module.exports = Region;