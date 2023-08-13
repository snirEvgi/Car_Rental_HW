import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { Button } from 'primereact/button'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
// import UpdateGameScores from './components/pages/updateScore'
import CreateCarPage from './components/pages/addCar'
import CarsPage from './components/pages/cars';
import AddRentPage from './components/pages/RentCar';
import RentsPage from './components/pages/rents';
import LandingPage from './components/pages/HomePage';


console.log("Snir")
interface IRoute {
    path: string,
    key: string,
    component: any,
    label?: string,
    onlyAdmin?: boolean
}
const routes: Array<IRoute> = [
    {
        path: "/newCar",
        component: <CreateCarPage />,
        key: "cars",
        label: "Create Car"
    },
    {
        path: "/cars",
        component: <CarsPage />,
        key: "cars",
        label: " Cars"
    },
    {
        path: "/addRent",
        component: <AddRentPage />,
        key: "addRent",
        label: " Add Rent"
    },
    {
            path: "/Rents",
        component: <RentsPage /> ,
        key: "Rents",
        label: "Rents"
    },
    {
            path: "/Home",
        component: <LandingPage /> ,
        key: "Home",
    }
    
]



function App() {
    const navigate = useNavigate();
    function logoutHandler() {
        navigate("/Home")
    }

    return (
            <div>
                <div style={{ width: "100%", top: 0, left: 0, position: "absolute", textAlign: "right" }}>
                    <Button onClick={logoutHandler}> Home</Button>
                </div>
                <div style={{ marginTop: "50px" }}>
                    {routes.filter(r => r.label).map((route: IRoute) => {
                        return <Link style={{marginRight:"5px"}} key={route.label} to={route.path} > {route.label} </Link>
                    })}
                    <Routes>
                        {routes.map((route: IRoute) => {
                            return <Route path={route.path} key={route.key} element={route.component} />
                        })}
                    </Routes>
                </div>
            </div>
    )
}





export default App
