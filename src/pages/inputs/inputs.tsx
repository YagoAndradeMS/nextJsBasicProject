import Globais from '@/components/Globais';
import Topo from '@/components/Topo';
import { useEffect, useState } from 'react';

const cursos = ['HTML', 'React', 'C++', 'Javascript', 'Arduino', 'CSS'];

export default function Inputs() {
  // Nome do componente alterado para maiúscula
  const [nome, setNome] = useState<string>('');
  const [curso, setCurso] = useState<string>(cursos[0]);

  useEffect(() => {
    Globais.curso = 'React';
  }, []); // Executa apenas uma vez na montagem do componente

  // Mapeando cursos com tipagem correta e adicionando a chave única
  const ccursos = cursos.map((c: string, index: number) => {
    return (
      <option key={index} value={c}>
        {c}
      </option>
    );
  });

  return (
    <div>
      <Topo />
      <div className='campoForm'>
        <label>Nome</label>
        <input
          type='text'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </div>
      <div className='campoForm'>
        <label>Curso</label>
        <select value={curso} onChange={e => setCurso(e.target.value)}>
          {ccursos}
        </select>
      </div>
      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}
