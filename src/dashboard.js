const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

function startDashboard(evaluationResults) {
    app.get('/results', (req, res) => {
        res.json(evaluationResults);
    });

    app.listen(3000, () => {
        console.log('Dashboard running at http://localhost:3000');
    });
}

module.exports = { startDashboard };
