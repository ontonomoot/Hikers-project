require('@babel/register');
require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 4000;

const config = require('./config/config');

config(app);

// Подключаем роуты
const authLoginApi = require('./routes/api/authLoginApi');

// Подключаем use
app.use('/api', authLoginApi);

app.listen(PORT, async () => console.log('\x1b[45m%s\x1b[0m', `Server started at ${PORT} port`));
