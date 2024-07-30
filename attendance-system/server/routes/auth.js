const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = [
  { email: 'shankar@gmail.com', password: bcrypt.hashSync('123456', 8) },
  { email: 'anujan@gmail.com', password: bcrypt.hashSync('abc123', 8) },
];

const secretKey = 'shan_sab_ac_lk'; 

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', { email, password });

  // Check if the user exists
  const user = users.find(u => u.email === email);
  if (user) {
    // Check password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Authentication successful, generate JWT token
    const token = jwt.sign({ id: user.email }, secretKey, {
      expiresIn: 86400, 
    });

    console.log('Login successful:', user);
    res.status(200).json({ message: 'Login successful', token });
  } else {
    // Authentication failed
    console.log('Invalid credentials');
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
