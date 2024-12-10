const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 3001;
const staticPath = path.resolve(__dirname, "public");

// Servindo arquivos estáticos (para desenvolvimento)
app.use(express.static(staticPath));

// Criação do servidor HTTP
const server = http.createServer(app);

// Configuração do Socket.io
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Permite a conexão do frontend React
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

// Manipulação de conexões do Socket.io
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  // Envia os contadores iniciais para o cliente
  socket.emit("receive_message", {
    porscheCount,
    formulaCount,
    mercedesCount,
  });

  // Eventos de incremento e decremento dos carros
  socket.on("increment_porsche", () => {
    porscheCount++;
    emitCounts();
  });

  socket.on("decrement_porsche", () => {
    porscheCount--;
    emitCounts();
  });

  socket.on("increment_formula", () => {
    formulaCount++;
    emitCounts();
  });

  socket.on("decrement_formula", () => {
    formulaCount--;
    emitCounts();
  });

  socket.on("increment_mercedes", () => {
    mercedesCount++;
    emitCounts();
  });

  socket.on("decrement_mercedes", () => {
    mercedesCount--;
    emitCounts();
  });
});

// Servir o arquivo HTML para o frontend quando em produção
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build"))); // Serve os arquivos estáticos gerados pelo build
  app.get("*", (req, res) => {
    const indexFile = path.join(__dirname, "build", "index.html");
    return res.sendFile(indexFile);
  });
} else {
  // Caso esteja em desenvolvimento, serve a pasta public
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT " + PORT);
});
