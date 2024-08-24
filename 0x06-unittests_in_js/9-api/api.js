const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  new_id = Number(id);
  if (Number.isInteger(new_id)) {
    res.statusCode = 200;
    res.send(`Payment methods for cart ${new_id}`);
  } else {
    res.status(404).send('');
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
