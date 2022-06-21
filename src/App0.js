import "./styles.css";
import { useState } from "react";
import Button from "./components/Button";
import Number from "./components/Number";
export default function App() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);
  const aumentar = (e) => {
    e.preventDefault();
    setContador(contador + parseInt(incremento));
  };
  const disminuir = (e) => {
    e.preventDefault();
    setContador(contador - parseInt(incremento));
  };
  const onChange = (e) => {
    const valor = e.target.value;
    setIncremento(valor);
  };
  return (
    <div className="App">
      <h1>Editando con Codealo</h1>
      <div>
        <input
          type="number"
          placeholder="(1) valor de incremento"
          onChange={onChange}
          value={incremento}
        ></input>
      </div>
      <div>
        <Button onClick={aumentar}>Aumentar</Button>
      </div>
      <div>
        <Number value={contador} />
      </div>
      <div>
        <Button onClick={disminuir}>Disminuir</Button>
      </div>
    </div>
  );
}
