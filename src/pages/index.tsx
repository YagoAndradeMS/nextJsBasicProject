/*
import Image from 'nest/image'
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
*/

import Topo from '@/components/Topo';

// Starting the Home page
// npm run dev for run the code
export default function Home() {
  return (
    //Top of page, navbar
    <div>
      <Topo />
      <div style={testecss}>
        <div>curso de react Next</div>
        <div>Typescript</div>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>React</div>
      </div>
    </div>
  );
}

// Teste Css
const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px',
};
