import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber'; // Import InputNumber component
import axios from 'axios';

const UpdateGameScores = () => {
  const [gameId, setGameId] = useState(null);
  const [team_A_Score, setTeam_A_Score] = useState(null);
  const [team_B_Score, setTeam_B_Score] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpdateScores = async () => {
    try {
      const response = await axios.put(`http://localhost:4100/games/update/${gameId}`, {
        team_A_Score,
        team_B_Score
      });
      setMessage("Updated Succesfully");
    } catch (error) {
      console.error(error);
      setMessage('Error updating scores');
    }
  };

  return (
    <div>
      <h2>Update Game Scores</h2>
      <div className="p-field">
        <label htmlFor="gameId">Game ID</label>
        <InputNumber id="gameId" value={gameId} onChange={(e:any) => setGameId(e.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="team_A_Score">Team A Score</label>
        <InputNumber id="team_A_Score" value={team_A_Score} onChange={(e:any) => setTeam_A_Score(e.value)} />
      </div>
      <div className="p-field">
        <label htmlFor="team_B_Score">Team B Score</label>
        <InputNumber id="team_B_Score" value={team_B_Score} onChange={(e:any) => setTeam_B_Score(e.value)} />
      </div>
      <Button label="Update Scores" onClick={handleUpdateScores} className="p-button-success" />
      <p>{message}</p>
    </div>
  );
};

export default UpdateGameScores;
