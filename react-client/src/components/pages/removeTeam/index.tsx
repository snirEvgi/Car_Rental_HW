import  { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

const RemoveTeam = () => {
  const [teamId, setTeamId] = useState('');
  const [message, setMessage] = useState('');

  async function handleRemoveTeam   ()  {
    try {
      const result = await axios.delete(`http://localhost:4100/teams/${teamId}`);
      setMessage(result.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error removing team');
    }
  };

  return (
    <div>
      <h2>Remove Team</h2>
      <div className="p-field">
        <label htmlFor="teamId">Team ID</label>
        <InputText id="teamId" value={teamId} onChange={(e) => setTeamId(e.target.value)} />
      </div>
      <Button label="Remove Team" onClick={handleRemoveTeam} className="p-button-danger" />
      <p>{message}</p>
    </div>
  );
};

export default RemoveTeam;
