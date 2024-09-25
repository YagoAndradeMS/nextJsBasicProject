import DisplayState from '@/components/DisplayState';
import { useState } from 'react';

export default function usestate() {
  let [cont, setCont] = useState<number>(0);

  return (
    <div>
      useState
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
