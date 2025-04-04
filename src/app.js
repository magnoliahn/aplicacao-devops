const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
const data = {
    integrantes: [
      { nome: 'Magnólia Hiller' },
      { nome: 'Aline Teixeira' }
    ]
  };
  
  app.get('/integrantes', (req, res) => {
    res.json(data);
  });
  