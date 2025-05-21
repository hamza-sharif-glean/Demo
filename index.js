const express = require('express');
const widgetController = require('./controllers/widgetController');

const app = express();
app.use(express.json());

app.get('/widgets', widgetController.getAll);
app.get('/widgets/:id', widgetController.getById);
app.post('/widgets', widgetController.create);
// 🔍 new: search by name
app.get('/widgets/search', widgetController.searchByName);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`⚡️ Widget service listening on port ${port}`));

