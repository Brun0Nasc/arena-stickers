import { CardAtleta } from "../components/CardAtleta/CardAtleta";
import Atleta from "../types/Atleta";

export function Home() {
    var atletaMock: Atleta = {
      playerId: "123",
      firstName: "Neymar",
      lastName: "Jr.",
      height: "1.75",
      weight: "68",
      positions: "Atacante",
      dateBorn: "1995",
      dateDied: "2021",
      birthPlace: "São Paulo",
      draftInfo: "Sei lá o que é Draft",
      hofInductionInfo: "Sei lá o que é Hall of Fame",
      nbaDebut: "2010",
      accolades: ["Melhor jogador do mundo"],
      teams: ["Santos", "Barcelona", "PSG"],
      headshotUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQmsQs-x4fcdW4wbP0Nfb3xy7XVkjnu7fFDCmC_JQuBFgClb33hq8BkcVhsxM9EaxmZY&usqp=CAU",
    };

    return (
        <div>
            <h1>Figurinhas dos Atletas</h1>
            <CardAtleta atleta={atletaMock} />
        </div>
    );
}