const express = require('express');
const path = require('path');
const handleRender = require('./render');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
app.use('/static', express.static(path.resolve(__dirname, '..', '..', 'public', 'static')));

app.get('*', handleRender);

app.listen(8080, () => console.log('Server running on http://localhost:8080'));
