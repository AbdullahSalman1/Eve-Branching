const express = require('express');
const config = require('./config');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API is running', env: config.env });
});

connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port} [${config.env}]`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });