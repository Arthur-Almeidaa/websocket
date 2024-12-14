import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import "./App.css"

// Conexão com o servidor Socket.io
const socket = io('https://websocket-5c8h.onrender.com');

// Componente para o simulador de carros
const CarSimulator = ({ carName, count, onIncrement, onDecrement }) => {
  return (
    <div className="car-simulator">
      <h3>{carName}: {count}</h3>
      <div className="buttons">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

function App() {
  // Estados para armazenar os contadores de cada carro
  const [porscheCount, setPorscheCount] = useState(0);
  const [formulaCount, setFormulaCount] = useState(0);
  const [mercedesCount, setMercedesCount] = useState(0);

  // Funções para emitir os eventos de incremento e decremento
  const incrementPorsche = () => socket.emit("increment_porsche");
  const decrementPorsche = () => socket.emit("decrement_porsche");

  const incrementFormula = () => socket.emit("increment_formula");
  const decrementFormula = () => socket.emit("decrement_formula");

  const incrementMercedes = () => socket.emit("increment_mercedes");
  const decrementMercedes = () => socket.emit("decrement_mercedes");

  // Recebe os dados do servidor e atualiza os contadores
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setPorscheCount(data.porscheCount);
      setFormulaCount(data.formulaCount);
      setMercedesCount(data.mercedesCount);
    });

    // Cleanup: Remove o ouvinte quando o componente for desmontado
    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <div className="App">
      <h1>Térreo</h1>
      <h2>Simuladores de Carro:</h2>
      
      {/* Usando o componente reutilizável para cada carro */}
      <CarSimulator 
        carName="Porsche" 
        count={porscheCount} 
        onIncrement={incrementPorsche} 
        onDecrement={decrementPorsche} 
      />
      
      <CarSimulator 
        carName="Fórmula" 
        count={formulaCount} 
        onIncrement={incrementFormula} 
        onDecrement={decrementFormula} 
      />
      
      <CarSimulator 
        carName="Mercedes" 
        count={mercedesCount} 
        onIncrement={incrementMercedes} 
        onDecrement={decrementMercedes} 
      />
    </div>
  );
}

export default App;
