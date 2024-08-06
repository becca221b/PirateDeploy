import "./MainPage.style.css";
import ListPirates from "../../components/ListPirates/ListPirates.component";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import HTTPClient from "../../utils/HTTPClient";

const MainPage = (props) => {

    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();
   
    useEffect(()=> {
        axios.get('https://piratesapp.onrender.com/api/pirates')
            .then((response) => {
                setPirates(response.data.pirates)
                //console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },)

   

    const Ir = () =>{
        navigate("/new");
    }

    return <div>
        
        <div className="d-flex d-flex justify-content-center align-items-center m-4">
            <h1 className="me-4">Pirates Crew</h1>
            <Button className="h-50" onClick={Ir}>Add Pirate</Button>
        </div>
        
        <div className="">
            <ListPirates pirates={pirates} />
        </div>
    </div>
}

export default MainPage;