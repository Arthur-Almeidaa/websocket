import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("https://websocket-5c8h.onrender.com");

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
  const [porscheCount, setPorscheCount] = useState(0);
  const [formulaCount, setFormulaCount] = useState(0);
  const [mercedesCount, setMercedesCount] = useState(0);
  const [aviaoCount, setAviaoCount] = useState(0);
  const [imersivaCount, setImersivaCount] = useState(0);

  const [carroProfissionalCount1, setCarroProfissionalCount1] = useState(0)
  const [carroProfissionalCount2, setCarroProfissionalCount2] = useState(0)

  

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("Dados recebidos:", data);
      setPorscheCount(data.porscheCount);
      setFormulaCount(data.formulaCount);
      setMercedesCount(data.mercedesCount);
      setImersivaCount(data.imersivaCount);
      setCarroProfissionalCount1(data.carroProfissionalCount1)
      setCarroProfissionalCount2(data.carroProfissionalCount2)
      setAviaoCount(data.aviaoCount);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const incrementPorsche = () => socket.emit("increment_porsche");
  const decrementPorsche = () => socket.emit("decrement_porsche");

  const incrementFormula = () => socket.emit("increment_formula");
  const decrementFormula = () => socket.emit("decrement_formula");

  const incrementMercedes = () => socket.emit("increment_mercedes");
  const decrementMercedes = () => socket.emit("decrement_mercedes");

  const incrementImersiva = () => socket.emit("increment_imersiva");
  const decrementImersiva = () => socket.emit("decrement_imersiva");

  const incrementCarroProfissionalCount1 = () => socket.emit("increment_profissional1")
  const decrementCarroProfissionalCount1 = () => socket.emit("decrement_profissional1")

  const incrementCarroProfissionalCount2 = () => socket.emit("increment_profissional2")
  const decrementCarroProfissionalCount2 = () => socket.emit("decrement_profissional2")

  const incrementAviao = () => socket.emit("increment_aviao");
  const decrementAviao = () => socket.emit("decrement_aviao");

  return (
    
    <div className="App">

    <div className="header">
      <h1>Contagens <span style={{ color: '#80cd76' }}>Exceed</span></h1>
      
      <select name="Andares">
        <option value="G1">G1</option>
        <option value="G1">Térreo</option>
        <option value="G1">3 e 4 Andar</option>
      </select>
    </div>

    <div className="h2-container">
  <div className="simuladores-carro">
    <h2>Simuladores de Carro:</h2>
    <CarSimulator carName="Porsche" count={porscheCount} onIncrement={incrementPorsche} onDecrement={decrementPorsche} />
    <CarSimulator carName="Fórmula" count={formulaCount} onIncrement={incrementFormula} onDecrement={decrementFormula} />
    <CarSimulator carName="Mercedes" count={mercedesCount} onIncrement={incrementMercedes} onDecrement={decrementMercedes} />
  </div>

  <div className="imersivas">
    <h2>Imersivas:</h2>
    <CarSimulator carName="Imersiva" count={imersivaCount} onIncrement={incrementImersiva} onDecrement={decrementImersiva} />
  </div>

  <div className="simuladores-profissionais">
    <h2>Simuladores Profissionais:</h2>
    <CarSimulator carName="McLaren" count={carroProfissionalCount1} onIncrement={incrementCarroProfissionalCount1} onDecrement={decrementCarroProfissionalCount1} />
    <CarSimulator carName="Fórmula" count={carroProfissionalCount2} onIncrement={incrementCarroProfissionalCount2} onDecrement={decrementCarroProfissionalCount2} />
  </div>

  <div className="aviao">
    <h2>Aviao:</h2>
    <CarSimulator carName="Aviao" count={aviaoCount} onIncrement={incrementAviao} onDecrement={decrementAviao} />
  </div>
  </div>
</div>
  );
}

export default App;
