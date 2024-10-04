import DisplayState from '@/components/DisplayState';
import Topo from '@/components/Topo';
import { useState } from 'react';

export default function Usestate() {
  const [cont, setCont] = useState<number>(0);

  return (
    <div>
      <Topo />
      useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
