import express from "express";

const routesV1 = express.Router();
const version = 'v1'

routesV1.get(`/${version}/login/`, (req, res) => {
  // Coloque sua lógica de rota aqui
  res.send('Rota de login acessada');
});

export default routesV1;