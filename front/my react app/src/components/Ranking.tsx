
import '../styling/ranking.css';

const Ranking = () => {
  const teams = [
    { position: 1, name: 'Barcelona', points: 70, played: 31, wins: 22, draws: 4, losses: 5, goalDiff: '+55' },
    { position: 2, name: 'Real Madrid', points: 63, played: 30, wins: 19, draws: 6, losses: 5, goalDiff: '+32' },
    { position: 3, name: 'Atlético Madrid', points: 60, played: 30, wins: 17, draws: 9, losses: 4, goalDiff: '+25' },
    { position: 4, name: 'Athletic Club', points: 54, played: 30, wins: 14, draws: 12, losses: 4, goalDiff: '+22' },
    { position: 5, name: 'Villarreal', points: 48, played: 29, wins: 13, draws: 9, losses: 7, goalDiff: '+12' },
    { position: 6, name: 'Real Betis', points: 48, played: 30, wins: 13, draws: 9, losses: 8, goalDiff: '+4' },
    { position: 7, name: 'Celta de Vigo', points: 45, played: 31, wins: 12, draws: 7, losses: 12, goalDiff: '-1' },
    { position: 8, name: 'Mallorca', points: 45, played: 31, wins: 12, draws: 7, losses: 12, goalDiff: '-6' },
    { position: 9, name: 'Real Sociedad', points: 41, played: 31, wins: 12, draws: 5, losses: 14, goalDiff: '-4' },
    { position: 10, name: 'Rayo Vallecano', points: 40, played: 30, wins: 10, draws: 10, losses: 10, goalDiff: '-2' },
    { position: 11, name: 'Getafe', points: 39, played: 31, wins: 10, draws: 9, losses: 12, goalDiff: '+3' },
    { position: 12, name: 'Valencia', points: 37, played: 31, wins: 9, draws: 10, losses: 12, goalDiff: '-12' },
    { position: 13, name: 'Sevilla', points: 36, played: 31, wins: 9, draws: 9, losses: 13, goalDiff: '-8' },
    { position: 14, name: 'Espanyol', points: 35, played: 30, wins: 9, draws: 8, losses: 13, goalDiff: '-7' },
    { position: 15, name: 'Osssuna', points: 35, played: 30, wins: 7, draws: 14, losses: 9, goalDiff: '-9' },
    { position: 16, name: 'Girona', points: 34, played: 30, wins: 9, draws: 7, losses: 14, goalDiff: '-9' },
    { position: 17, name: 'Deportivo Alavés', points: 30, played: 30, wins: 7, draws: 9, losses: 14, goalDiff: '-11' },
    { position: 18, name: 'Las Palmas', points: 29, played: 31, wins: 7, draws: 8, losses: 16, goalDiff: '-15' },
    { position: 19, name: 'Leganés', points: 28, played: 31, wins: 6, draws: 10, losses: 15, goalDiff: '-19' },
    { position: 20, name: 'Real Valladolid', points: 16, played: 30, wins: 4, draws: 4, losses: 22, goalDiff: '-50' },
  ];

  return (
    <div className="league-table">
      <h1>PRIMERA DIVISIÓN</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>PT</th>
            <th>PJ</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>DG</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.name}>
              <td>{team.position}</td>
              <td className="team-name">{team.name}</td>
              <td>{team.points}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.goalDiff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;