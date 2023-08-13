import  { useState,useRef } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios'; 
import { Toast } from 'primereact/toast';
import { Header } from '../../ui-components/header';
import { useNavigate } from 'react-router-dom';

const CreateCarPage = () => {
  const [car, setCar] = useState('');
  const [lp, setLp] = useState('');
  const [color, setColor] = useState('');
  const [engine, setEngine] = useState('');
  const [company, setCompany] = useState('');
  const [image, setImage] = useState('');
  const toastRef = useRef<Toast>(null)
  const [validationErrors, setValidationErrors] = useState({
    car: '',
    lp: '',
    color: '',
    engine: '',
    company: '',
    image: '',
  });
  async function CreateCar(){
    try {
      if (!car || !lp||isNaN(Number(lp)) || !color || !engine || !company || !image) {
        setValidationErrors({
          car: !car ? 'Car name is required.' : '',
          lp: !lp ? 'Correct license plate is required.' : '',
          color: !color ? 'Color is required.' : '',
          engine: !engine ? 'Engine details are required.' : '',
          company: !company ? 'Company name is required.' : '',
          image: !image ? 'Image URL is required.' : '',
        });
        return;
      }
  
      const response = await axios.post(`http://localhost:4100/cars/newCar`, {
        car,
        lp,
        color,
        engine,
        company,
        image,
      });
      
      console.log(response.data);
      showToast('success', 'Car Created', 'Car has been successfully created.')
      setTimeout(()=>{navi()},1000)
    } catch (error) {
      showToast('error', 'Error', 'An error occurred while creating the car.');
      console.log(error);
    }
  };
  const showToast = (severity:any, summary:string, detail:string) => {
    if (toastRef.current) {
      toastRef.current?.show({ severity, summary, detail });
    }
  };
 const navigate = useNavigate();
    function navi() {
        navigate("/Cars")
    }
  return (
    <div>
      <Toast ref={toastRef} />
      <Header text="Add New Car" />
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="car">Car Name</label>
          <InputText
            id="car"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          />
          {validationErrors.car && (
            <small className="p-error">{validationErrors.car}</small>
          )}
        </div>
        <div className="p-field">
          <label htmlFor="lp">LP</label>
          <InputText
            id="lp"
            value={lp}
            onChange={(e) => setLp(e.target.value)}
          />
          {validationErrors.lp && (
            <small className="p-error">{validationErrors.lp}</small>
          )}
        </div>
        <div className="p-field">
          <label htmlFor="color">Color</label>
          <InputText
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          {validationErrors.color && (
            <small className="p-error">{validationErrors.color}</small>
          )}
        </div>
        <div className="p-field">
          <label htmlFor="engine">Engine</label>
          <InputText
            id="engine"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          />
          {validationErrors.engine && (
            <small className="p-error">{validationErrors.engine}</small>
          )}
        </div>
        <div className="p-field">
          <label htmlFor="company">Company</label>
          <InputText
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {validationErrors.company && (
            <small className="p-error">{validationErrors.company}</small>
          )}
        </div>
        <div className="p-field">
          <label htmlFor="image">Image</label>
          <InputText
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {validationErrors.image && (
            <small className="p-error">{validationErrors.image}</small>
          )}
        </div>
      </div>
      <Button label="Create" onClick={CreateCar} />
    </div>
  );
};

export default CreateCarPage;