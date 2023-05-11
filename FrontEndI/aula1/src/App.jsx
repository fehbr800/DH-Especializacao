import { useState } from 'react'


function Contador() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={aumentarContador}>Aumentar +1</button>
    </div>
  );
}

export default Contador;