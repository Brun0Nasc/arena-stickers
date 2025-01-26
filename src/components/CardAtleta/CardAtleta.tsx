import { Atleta } from "../../types/Atleta";

interface CardAtletaProps {
  atleta: Atleta;
}

export function CardAtleta({ atleta }: CardAtletaProps) {
  return (
    <div className="card-atleta">
      <h2>{atleta.nome}</h2>
    </div>
  );
}
