const express = require("express");
const cors = require("cors");
const app = express();

const DataService = require('./src/services/service.data');
const service = new DataService();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ['http://localhost:5173', 'https://form-miro-poblacion.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server!");
});

app.get('/datos', async (req, res) => {
  const rta = await service.find();
  res.status(200).json(rta);
})

app.post("/datos", async (req, res) => {
  const data = req.body;
  console.log("Datos recibidos:", data);
  const rta = await service.create(data)
  res.status(200).json(rta);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
