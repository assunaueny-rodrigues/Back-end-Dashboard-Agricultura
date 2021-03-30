const app = require('./server');
const routes = require('./routes');

app.use(routes);
const PORTA = 3333
app.listen(PORTA, () => {
  console.log(`APi rodando na porta ${PORTA}`);
});