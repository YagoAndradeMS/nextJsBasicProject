import { useState } from 'react';

export default function inputs() {
  const [nome, setNome] = useState<string>('');
  const [curso, setCurso] = useState<string>('');

  return (
    <div>
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
        <input
          type='text'
          value={curso}
          onChange={e => setCurso(e.target.value)}
        />
      </div>
      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
    </div>
  );
}
