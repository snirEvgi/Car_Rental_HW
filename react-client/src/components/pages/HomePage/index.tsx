import { Link } from 'react-router-dom';
import './HomePage.css'; 
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Welcome to Car Rentals</h1>
        <p>Your go-to destination for renting cars</p>
      </div>
      <div className="content">
        <div className="feature">
          <h2>Wide Range of Cars</h2>
          <p>Choose from our diverse fleet of cars for your needs.</p>
        </div>
        <div className="feature">
          <h2>Convenient Locations</h2>
          <p>We have rental locations conveniently located near you.</p>
        </div>
        <div className="feature">
          <h2>Flexible Rentals</h2>
          <p>Choose rental periods that suit your schedule.</p>
        </div>
      </div>
      <div className="cta">
        <h2>Rent a Car Today!</h2>
        <p>Experience the thrill of driving with Car Rentals.</p>
        <Link to="/cars" className="cta-button">
          View Our Cars
        </Link>
      </div>
      <div className="footer">
        <p>&copy; 2023 Car Rentals. All rights reserved to SNIR EVGI.</p>
      </div>
    </div>
  );
};

export default LandingPage;
