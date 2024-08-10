const dbConnect = require("./config/databases");
const express = require("express");
const app = express();
const cors = require('cors')

// Middleware for parsing data
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

require("dotenv").config();
const PORT = process.env.PORT || 5000

// Make app listen on PORT
app.listen(PORT, () => {
    console.log(`App started at PORT: ${PORT}`);
})

// Connect database
dbConnect();

// Import routes
const userRoutes = require("./routes/userRoutes");

// Mount routes
app.use("/api/v1", userRoutes)

// Default Route
app.get('/', (req, res) => {
    res.send("<h1>Hello world, Welcome to home page</h1>");
})