const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    return resp.json({
        event: 'Nodejs Practice',
        student: 'Sergio Rosa'
    });
});

app.listen(3334);