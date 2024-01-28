const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  const searchTerm = req.query;
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

  // Filter data based on search parameters
  const filteredData = data.filter(item => {
    for (const key in searchTerm) {
      if (item[key] !== searchTerm[key]) {
        return false;
      }
    }
    return true;
  });

  res.json(filteredData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
