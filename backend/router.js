import express from 'express';
import User from './schema.js';

const router = express.Router(); // Fixed initialization of router

router.post('/post', async (req, res) => {
  const { name, moment, description } = req.body;
  const user = new User({ name, moment, description });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/get', async (req, res) => {
  try {
    const users = await User.find(); // Added await for async operation
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/put/:id', async (req, res) => {
  const { name, moment, description } = req.body;
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, moment, description },
      { new: true }
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).send('The user is deleted successfully');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; // Fixed export