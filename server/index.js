const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 3001

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Permite a conexão do frontend React
    methods: ["GET", "POST"],
  },
});

// Contadores para cada simulador de carro
let porscheCount = 0;
let formulaCount = 0;
let mercedesCount = 0;

// Função para emitir os contadores para todos os clientes
const emitCounts = () => {
  io.emit("receive_message", {
    porscheCount,
    formulaCount,
    mercedesCount,
  });
};

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  // Envia os contadores iniciais para o cliente
  socket.emit("receive_message", {
    porscheCount,
    formulaCount,
    mercedesCount,
  });

  // Evento de incremento para Porsche
  socket.on("increment_porsche", () => {
    porscheCount++;
    emitCounts(); // Emite os novos valores
  });

  // Evento de decremento para Porsche
  socket.on("decrement_porsche", () => {
    porscheCount--;
    emitCounts(); // Emite os novos valores
  });

  // Evento de incremento para Fórmula
  socket.on("increment_formula", () => {
    formulaCount++;
    emitCounts(); // Emite os novos valores
  });

  // Evento de decremento para Fórmula
  socket.on("decrement_formula", () => {
    formulaCount--;
    emitCounts(); // Emite os novos valores
  });

  // Evento de incremento para Mercedes
  socket.on("increment_mercedes", () => {
    mercedesCount++;
    emitCounts(); // Emite os novos valores
  });

  // Evento de decremento para Mercedes
  socket.on("decrement_mercedes", () => {
    mercedesCount--;
    emitCounts(); // Emite os novos valores
  });
});

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});
