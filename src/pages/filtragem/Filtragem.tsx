import Topo from '@/components/Topo';
import { useState } from 'react';

const carros = [
  { id: 0, categ: 'Esporte', valor: '120000.00', modelo: 'Golf GTI' },
  { id: 1, categ: 'Esporte', valor: '200000.00', modelo: 'Camaro' },
  { id: 2, categ: 'SUV', valor: '100000.00', modelo: 'HRV' },
  { id: 3, categ: 'SUV', valor: '100000.00', modelo: 'T-Cross' },
  { id: 4, categ: 'Utilitario', valor: '180000.00', modelo: 'Hillux' },
  { id: 5, categ: 'Utilitario', valor: '180000.00', modelo: 'Ranger' },
];
function Filtragem() {
  const [categ, setCateg] = useState<string>('');
  const [linhas, setLinhas] = useState<JSX.Element[]>([]);

  function criarLinhas(cat: string) {
    setCateg(cat);
    const l: JSX.Element[] = [];

    carros.forEach(c => {
      if (c.categ == cat || cat == 'Todos') {
        l.push(
          <div className='flex flex-row w-[500px]' key={c.id}>
            <div className='w-full'>{c.categ}</div>
            <div className='w-full'>{c.valor}</div>
            <div className='w-full'>{c.modelo}</div>
          </div>
        );
      }
    });
    setLinhas(l);
  }

  return (
    <div>
      <Topo />

      <label>Selecione a categoria</label>
      <select
        value={categ}
        onChange={e => {
          criarLinhas(e.target.value);
        }}
      >
        <option value=''>Nenhum</option>
        <option value='Esporte'>Esporte</option>
        <option value='SUV'>SUV</option>
        <option value='Utilitario'>Utilitario</option>
        <option value='Todos'>Todos</option>
      </select>

      <div className='flex flex-col'>
        <div className='flex flex-row w-[500px]'>
          <div className='w-full'>Categoria</div>
          <div className='w-full'>Valor</div>
          <div className='w-full'>Modelo</div>
        </div>
        {linhas}
      </div>
    </div>
  );
}

export default Filtragem;
