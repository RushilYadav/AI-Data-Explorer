//load environment variables from .env file
require('dotenv').config();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//import express
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000', // allow requests from frontend
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));


//middleware to parse JSON bodies
app.use(express.json());

const bcrypt = require('bcryptjs');

app.post('/signup', async (req, res) => {
  console.log('Signup request body:', req.body);

  const { name, email, password } = req.body;

  try {
    console.log('Checking existing user...');
    const existingUser = await prisma.user.findUnique({ where: { email } });
    console.log('Existing user:', existingUser);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Hashing password...');
    const passwordHash = await bcrypt.hash(password, 10);
    console.log('Password hashed');

    const user = await prisma.user.create({
      data: { name, email, passwordHash },
    });
    console.log('User created:', user);

    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    console.error('Error in signup route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});