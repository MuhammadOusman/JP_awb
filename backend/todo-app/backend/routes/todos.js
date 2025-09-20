const express = require('express');

const router = express.Router();

const Todo = require('../models/Todo');

// GET all todos

router.get('/', async (req, res) => {

  try {

    const todos = await Todo.find();

    res.json(todos);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

});

// POST a new todo

router.post('/', async (req, res) => {

  const todo = new Todo({

    text: req.body.text,

  });

  try {

    const newTodo = await todo.save();

    res.status(201).json(newTodo);

  } catch (err) {

    res.status(400).json({ message: err.message });

  }

});

// PUT update a todo

router.put('/:id', async (req, res) => {

  try {

    const todo = await Todo.findById(req.params.id);

    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;

    todo.text = req.body.text || todo.text;

    const updatedTodo = await todo.save();

    res.json(updatedTodo);

  } catch (err) {

    res.status(400).json({ message: err.message });

  }

});

// DELETE a todo

router.delete('/:id', async (req, res) => {

  try {

    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json({ message: 'Todo deleted' });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

});

module.exports = router;