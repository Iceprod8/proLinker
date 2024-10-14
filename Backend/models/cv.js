const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', require: true },
    region: { type: String, required: true },
    city: { type: String, required: true },
    visibility: { type: Boolean, default: true },
    experience_id: { type: mongoose.Schema.Types.ObjectId, ref: 'experience', require: true },
    studies_id: { type: mongoose.Schema.Types.ObjectId, ref: 'experience', require: true },
    hard_skill: { type: [String], required: true },
    soft_skill: { type: [String], required: true },
    hobbies: { type: String },
    profil: { type: String },
    job_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'job_type', required: true }
}, { timestamps: true });

const Cv = mongoose.model('cv', cvSchema);
module.exports = Cv;