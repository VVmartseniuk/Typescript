"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodos = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodos);
    res.status(201).json({ message: 'random', createdTodo: newTodos });
};
