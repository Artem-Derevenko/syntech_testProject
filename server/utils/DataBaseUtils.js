import mongoose from 'mongoose';

import '../models/List';

import config from '../config/index.js';

const List = mongoose.model('List');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function getLists() {
    return List.find();
}

export function createListItem(data) {
    const list = new List({
        author: data.title,
        name: data.name
    });

    return list.save();
}

export function deleteListItem(id) {
    return List.findById(id).remove();
}