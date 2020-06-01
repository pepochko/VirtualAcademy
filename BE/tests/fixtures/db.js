const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./../../src/models/user');
const Task = require('./../../src/models/task');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'Ivan',
    email: 'ivan@example.com',
    password: '566548Test',
    tokens: [{
        token: jwt.sign( { _id: userOneId}, process.env.JWT_SECRET)
    }]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: 'Petar',
    email: 'petar@example.com',
    password: 'dsad123',
    tokens: [{
        token: jwt.sign( { _id: userTwoId}, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userOneId
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: false,
    owner: userOneId
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: false,
    owner: userTwoId
}

const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree
}