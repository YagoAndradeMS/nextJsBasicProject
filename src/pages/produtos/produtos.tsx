import Card from '@/components/Card';
import Topo from '@/components/Topo';
import { useRouter } from 'next/router';

// Fake API
const produtos = [
  {
    id: 1,
    produto: 'Mouse',
    valor: 49.9,
    desconto: 10,
    disponivel: true,
  },
  {
    id: 2,
    produto: 'Teclado',
    valor: 69.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 3,
    produto: 'Monitor',
    valor: 659.9,
    desconto: 100,
    disponivel: false,
  },
  {
    id: 4,
    produto: 'CPU',
    valor: 829.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 5,
    produto: 'Cx.Som',
    valor: 39.9,
    desconto: 0,
    disponivel: false,
  },
  {
    id: 6,
    produto: 'Microfone',
    valor: 65.0,
    desconto: 0,
    disponivel: true,
  },
];

// Function for calc the discount
function calcDesc(v: number, d: number) {
  return v - d;
}

export default function ProdutosPagina() {
  // Nome do componente ajustado para maiúscula
  // Pegando dados do usuário
  const router = useRouter();
  const { nome, curso } = router.query;

  console.log(nome, curso); // Adicionando ? para evitar erros se nome ou curso forem undefined

  return (
    <div>
      <Topo />

      <div className='flex justify-center gap-3'>
        {produtos.map(e => {
          if (e.disponivel) {
            return (
              // Renderizando os produtos
              <Card
                key={e.id}
                produto={e.produto}
                valor={e.valor}
                desconto={e.desconto}
                funcao={calcDesc}
              >
                <div>Teste Curso de React Next</div>
                <div>CFBCursos</div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}
