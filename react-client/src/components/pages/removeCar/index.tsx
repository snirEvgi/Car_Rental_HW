import  { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

const RemoveCar = () => {
  const [carId, setCarId] = useState('');
  const [message, setMessage] = useState('');

  async function handleRemoveTeam   ()  {
    try {
      const result = await axios.delete(`http://localhost:4100/cars/${carId}`);
      setMessage(result.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error removing car');
    }
  };

  return (
    <div style={{height: "200px", width:"200px", margin:"10px"}}>
      <h3>Remove Car</h3>
      <div className="p-field">
        <label htmlFor="carId">Car ID</label>
        <InputText id="carId" value={carId} onChange={(e) => setCarId(e.target.value)} />
      </div>
      <Button label="Remove Car" onClick={handleRemoveTeam} className="p-button-danger" />
      <p>{message}</p>
    </div>
  );
};

export default RemoveCar;
