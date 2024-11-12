const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });

const express = require('express');
const connectDB = require('./config/db');  // Import the connection function
const morgan = require('morgan');
const path = require('path');
const cors = require('cors'); // Import cors package
const authMiddleware = require('./middleware/authMiddleware'); // Adjust path as needed

// Initialize Express
const app = express();  // This line should be at the top before using any routes or middleware

// Connect to the database
connectDB();  // Only call connectDB once to handle the DB connection

// Use CORS middleware
app.use(cors());

// Use express and morgan middlewares
app.use(express.json());
app.use(morgan('tiny'));

// Define routes for the API
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

const authRoutes = require('./routes/auth');
app.use('/api/v1/auth', authRoutes); // Make sure the correct route is defined

// Example of using authMiddleware in routes
app.use('/api/v1/protected-route', authMiddleware, (req, res) => {
    res.send(`Hello, user ${req.user.id}`);
});

// Routes for authentication, contacts, and users
app.use('/api/v1/contacts', require('./routes/contacts'));
app.use('/api/v1/users', require('./routes/user'));

// Serve frontend in production (static files)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
