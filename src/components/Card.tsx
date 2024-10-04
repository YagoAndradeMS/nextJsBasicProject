// Interface for props
interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: (valor: number, desconto: number) => number;
  children: React.ReactNode;
}

{
  /* Renderizando os produtos */
}
export default function Card(props: CardProps) {
  return (
    <div
      className={`flex justify-center flex-col border-4 ${
        props.desconto > 0 ? 'border-red-700' : 'border-blue-700'
      } rounded-sm p-1`}
    >
      <div>Produto: {props.produto}</div>
      <div>Valor: R${props.valor}</div>
      {/* Sistema condicional para exibir desconto */}
      {props.desconto > 0 && (
        <div>
          <div>Desconto: R${props.desconto}</div>
          <div>
            Preço de venda: R$ {props.funcao(props.valor, props.desconto)}
          </div>
        </div>
      )}
      {/* Exibindo uma propriedade filho */}
      <div>
        {Array.isArray(props.children) ? props.children[0] : props.children}
      </div>
    </div>
  );
}
