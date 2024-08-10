// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 3000;

// // MySQL Connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // Change to your MySQL username
//     password: '', // Change to your MySQL password if set
//     database: 'database_1' // Change to your database name
// });

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Serve static files (e.g., HTML, CSS, JS)
// app.use(express.static('public'));

// // Handle form submission
// app.post('/submitForm', (req, res) => {
//     const { name, Email, subject, message } = req.body;
//     const sql = 'INSERT INTO first_data (name, Email, subject, message) VALUES (?, ?, ?, ?)';
//     connection.query(sql, [name, Email, subject, message], (error, results) => {
//         if (error) {
//             console.error('Error:', error);
//             res.status(500).send('Error saving data');
//         } else {
//             res.sendStatus(200);
//         }
//     });
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change to your MySQL username
    password: '', // Change to your MySQL password if set
    database: 'database_1' // Change to your database name
});

connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submitForm', (req, res) => {
    const { name, Email, subject, message } = req.body;
    console.log('Received form data:', req.body); // Log the received form data
    const sql = 'INSERT INTO first_data (name, Email, subject, message) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, Email, subject, message], (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Error saving data');
        } else {
            res.sendStatus(200);
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

