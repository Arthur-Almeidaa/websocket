const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { emit } = require("process");

const app = express();
const PORT = 3001;

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
}));

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let porscheCount = 0;
let formulaCount = 0;
let mercedesCount = 0;
let imersivaCount = 0;
let carroProfissionalCount1 = 0;
let carroProfissionalCount2 = 0;
let aviaoCount = 0;

const emitCounts = () => {
  io.emit("receive_message", {
    porscheCount,
    formulaCount,
    mercedesCount,
    imersivaCount,
    carroProfissionalCount1,
    carroProfissionalCount2,
    aviaoCount
  });
};

io.on("connection", (socket) => {

  socket.emit("receive_message", {
    porscheCount,
    formulaCount,
    mercedesCount,
    imersivaCount,
    carroProfissionalCount1,
    carroProfissionalCount2,
    aviaoCount
  });

  socket.on("increment_porsche", () => {
    porscheCount++;
    emitCounts();
  });

  socket.on("decrement_porsche", () => {
    porscheCount = Math.max(0, porscheCount - 1);
    emitCounts();
  });

  socket.on("increment_formula", () => {
    formulaCount++;
    emitCounts();
  });

  socket.on("decrement_formula", () => {
    formulaCount = Math.max(0, formulaCount - 1);
    emitCounts();
  });


  socket.on("increment_mercedes", () => {
    mercedesCount++;
    emitCounts();
  });

  socket.on("decrement_mercedes", () => {
    mercedesCount = Math.max(0, mercedesCount - 1);
    emitCounts();
  });

  socket.on("increment_imersiva", () => {
    imersivaCount++;
    emitCounts();
  });
  
  socket.on("decrement_imersiva", () => {
    imersivaCount = Math.max(0, imersivaCount - 1);
    emitCounts();
  });

  socket.on("increment_profissional1", () => {
    carroProfissionalCount1++
    emitCounts()
  })

  socket.on("decrement_profissional1", () => {
    carroProfissionalCount1 = Math.max(0, carroProfissionalCount1 - 1)
    emitCounts()
  })
  socket.on("increment_profissional2", () => {
    carroProfissionalCount2++
    emitCounts()
  })
  socket.on("decrement_profissional2", () => {
    carroProfissionalCount2 = Math.max(0, carroProfissionalCount2 - 1)
    emitCounts()
  })

  socket.on("increment_aviao", () => {
    aviaoCount++;
    emitCounts();
  });
  
  socket.on("decrement_aviao", () => {
    aviaoCount = Math.max(0, aviaoCount - 1);
    emitCounts();
  });
});

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
