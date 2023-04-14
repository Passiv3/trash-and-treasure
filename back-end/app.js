const express = require('express');

app = express();

app.get('/', (req, res)=>{
    res.send('Wow');
    console.log('Hello from the back-end');
});

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
});