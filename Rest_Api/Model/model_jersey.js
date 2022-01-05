const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    jenis: { type: String },
    deskripsi: { type: String },
    merk: { type: String },
    bahan: { type: String },
    gambar: { type: String },
    size: { type: String },
    date: { type: Date, default: Date.now }

})
module.exports = mongoose.model('jersey', UserSchema)