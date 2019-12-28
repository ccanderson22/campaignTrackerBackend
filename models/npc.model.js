const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const npcSchema = new Schema({
    campaignId: {type: [String], required: true, default: 'TBD'},
    image: {type: String },
    name: {type: String, required: true},
    sex: {type: String, required: true},
    race: {type: String, required: true},
    age: {type: Number, required: true},
    height: {type: Number, required: true},
    alignment: {type: String, required: true },
    profession: {type: [String], required: true},
    affiliations: {
        organizations: {type: [String], required: true},
        people: {type: [String], required: true}
    },
    goals: {type: [String], required: true},
    ticks: {type: [String]},
    flaws: {type: [String]},
    oddities: {type: [String], required: true},
    description: {type: [String], required: true},
    notes: {type: [String]}
})
//Things to possibly add TODO:
//      Link to full monster block if they have spells and 
//          such or add just add that info here, if not add HP member
//      Background object(Hometown, where they live currently)
//      Known secrets
//      NPC Role(BBEG, Shopkeeper, Quest giver, Deity)
//      Personas/Alter Egos


const Npc = mongoose.model('Npc', npcSchema);

module.exports = Npc;