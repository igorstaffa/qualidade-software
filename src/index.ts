// MARK: Express
import express = require('express');
import cors = require('cors');

// MARK: Swagger
import * as swaggerUi from "swagger-ui-express";
import YAML = require('yamljs');

// MARK: Express App
const app = express();

// MARK: Middlewares
app.use(cors());
app.use(express.json());

// Ping
interface IPingResponse {
	ok: boolean;
}

app.get('/', async (_, res: express.Response<IPingResponse>) => {
  res.send({ ok: true });
});

// MARK: Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MARK: Start Server
async function startServer(port = 8000): Promise<void> {
  return new Promise((res) => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);

      res();
    });
  });
}

const startServerPromise = startServer();
export default startServerPromise;
