import Atleta from "../../types/Atleta";

interface CardAtletaProps {
  atleta: Atleta;
}

export function CardAtleta({ atleta }: CardAtletaProps) {
  return (
    <div className="card-atleta" key={atleta.playerId}>
      <img
        src={atleta.headshotUrl}
        alt={`${atleta.firstName} ${atleta.lastName}`}
        className="img-atleta"
      />
      <h3>
        {atleta.firstName} {atleta.lastName}
      </h3>
      <p><strong>Posições:</strong> {atleta.positions}</p>
      <p><strong>Data de Nascimento:</strong> {atleta.dateBorn}</p>
      <p><strong>Local de Nascimento:</strong> {atleta.birthPlace}</p>
      <p><strong>Draft:</strong> {atleta.draftInfo}</p>
      <button>Favoritar</button>
    </div>
  );
}
