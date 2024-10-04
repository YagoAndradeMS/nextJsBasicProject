import Globais from '@/components/Globais';
import Topo from '@/components/Topo';
import { useEffect, useState } from 'react';

function UseEffectComponent() {
  // Nome do componente ajustado
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert('UseEffect, disparado');
    Globais.canal = 'CFBDrone';
    Globais.curso = 'Typescript';
    Globais.ano = '2025';
  }, []);

  function add() {
    setAux(prevAux => prevAux + 1); // Usando o valor anterior para incrementar o estado
  }

  return (
    <div>
      <Topo />
      <div>
        <p>{`Valor de cont: ${aux}`}</p>
        <p>{`Valor de aux: ${aux}`}</p>
        <button onClick={add}>Adicionar 1</button>
      </div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}

export default UseEffectComponent; // Exportando o nome correto
