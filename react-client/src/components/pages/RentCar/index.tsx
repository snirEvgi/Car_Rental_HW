import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { Header } from '../../ui-components/header';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

const AddRentPage = () => {
  const [carId, setCarId] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const toastRef = useRef<Toast>(null)

  async function CreateRent() {
    try {
      const fromDate = new Date(from);
      const toDate = new Date(to);
      const daysDifference = Math.ceil(
        (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (isNaN(Number(pricePerDay))) {
        return showToast('error', 'Error', 'An error occurred while inserting price.');
        ;

      }
      // if (from || to === "") {
      //   return showToast('error', 'Error', 'An error occurred while inserting dates.');

      // }

      const calculatedPrice = daysDifference * Number(pricePerDay);
      console.log("daysDifference", daysDifference);
      console.log("calculatedPrice", calculatedPrice);
      const response = await axios.post(`http://localhost:4100/rentals/rent`, {
        carId,
        from,
        to,
        price: calculatedPrice,
        pricePerDay: Number(pricePerDay),
      });
      console.log(response);

      showToast('success', 'Car Rented', 'Car has been successfully Rented.')
      setTimeout(() => { navi() }, 1000)
    } catch (error: any) {
      if (error.message === "Request failed with status code 400") {
        showToast('error', 'Error', 'Car do not exist.');

      } else
        showToast('error', 'Error', 'An error occurred while renting the car.');
      console.log(error);
    }
  };
  const showToast = (severity: any, summary: string, detail: string) => {
    if (toastRef.current) {
      toastRef.current?.show({ severity, summary, detail });
    }
  };
  const navigate = useNavigate();
  function navi() {
    navigate("/Rents")
  }
  return (
    <div>
      <Toast ref={toastRef} />
      <Header text="Rent A Car" />
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="car">Car ID</label>
          <InputText id="car" value={carId} onChange={(e) => setCarId(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="lp">From</label>
          <InputText type='date' id="lp" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="color">To</label>
          <InputText type='date' id="color" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="p-field">
          <label htmlFor="company">Price Per Day</label>
          <InputText id="company" value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} />
        </div>

      </div>
      <Button label="Create" onClick={() => { CreateRent() }} />
    </div>
  );
};

export default AddRentPage;
