const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve a simple HTML page
app.get('/', (req, res) => {
    res.send('<h1>Hello from [Revanth Kadiyala]\'s Web App</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
