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

app.get('/available_payments', (req, res) => {
  res.status(200).send({"payment_method":{ "credit_cards":true,"paypal":false}});
})

app.use(express.json())
app.post('/login', (req, res) => {
  const name = req.body.userName;
  res.status(201).send('Welcome ' + name);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
