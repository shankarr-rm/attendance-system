const express = require('express');
const router = express.Router();


const users = [
  { email: 'shankar@gmail.com', password: '123456' },
  { email: 'anujan@gmail.com', password: 'abc123' },
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', { email, password });

  // Check if the user exists
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Authentication successful
    console.log('Login successful:', user);
    res.status(200).json({ message: 'Login successful', user });
  } else {
    // Authentication failed
    console.log('Invalid credentials');
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
