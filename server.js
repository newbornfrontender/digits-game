import polka from 'polka';

const toJson = (obj) => JSON.stringify(obj);

const app = polka();

app.get('/api/game', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({ test: 'test' }));
});

app.listen(3000)
