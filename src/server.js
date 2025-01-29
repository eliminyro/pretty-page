const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pretty Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(120deg, #f6d365, #fda085);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #fff;
        }
        .card {
          background: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          color: #333;
        }
        .card h1 {
          margin: 0 0 10px;
          font-size: 2.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to My Pretty Page!</h1>
        <p>This is a modern, gradient-background design with a card layout.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});
