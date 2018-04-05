import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    author: { type: String, required: true },
    name: { type: String, required: true }
});

const List = mongoose.model('List', ListSchema);