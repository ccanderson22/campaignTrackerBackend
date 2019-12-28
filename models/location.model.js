const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    campaignId: {type: String, required: true, default: 'TBD'},
    name: {type: String, required: true},
    description: {type: [String], required: true},
    regionId: {type: String, required: true},//Maybe region ids or just region names
    events: {type: [String], required: true},//TODO: Maybe Use Object instead, to store the whole event
    owner: {type: String, required: true},
    npcs: {type: [String], required: true},
    type: {type: String, required: true},//Shop, dungeon, Inn, Castle ect.
})
/**Things to possibly add
 *  organizations that are affiliated with the location
 * 
 */
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;