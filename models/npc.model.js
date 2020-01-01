const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const npcSchema = new Schema({
    campaignId: {type: [String], required: true, default: ['TBD']},
    image: {type: String, default: 'TBD'},
    name: {type: String, required: true, default: 'TBD'},
    sex: {type: String, required: true, default: 'TBD'},
    race: {type: String, required: true, default: 'TBD'},
    age: {type: Number, required: true, default: 0},
    height: {type: Number, required: true, default: 0},
    eyes: {type: String, required: true, default: 'TBD'},
    hair: {type: String, required: true, default: 'TBD'},
    alignment: {type: String, required: true, default: 'TBD'},
    profession: {type: [String], required: true, default: ['TBD']},
    affiliations: {
        organizations: {type: [String], required: true, default: ['TBD']},
        people: {type: [String], required: true, default: ['TBD']}
    },
    goals: {type: [String], required: true, default: ['TBD']},
    ticks: {type: [String], default: ['TBD']},
    flaws: {type: [String], default: ['TBD']},
    oddities: {type: [String], required: true, default: ['TBD']},
    description: {type: [String], required: true, default: ['TBD']},
    notes: {type: [String], default: ['TBD']}
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