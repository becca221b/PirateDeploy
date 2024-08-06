import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import Switch from '@mui/material/Switch';

const Details = () =>{
    
    const params = useParams();
    const [result, setResult] = useState({pegLeg: false,
        eyePatch: false,
        hookHand: false});

    useEffect(()=>{
        axios.get(`https://piratesapp.onrender.com/api/pirate/${params.id}/`)
             
             .then( response => {
                setResult(response.data.result);
                //setSwitches(response.data.result);
                console.log(response.data.result);
             })
             .catch( err => console.log(err));
    },[params.id])
    
    
    const handleChange = (switchName) => (event) => {
        const newValue = event.target.checked;
        const updatedResult = { ...result, [switchName]: newValue };
        setResult(updatedResult);
        editPirate(updatedResult);
    };

    
    const editPirate = (data) => {
        
        axios.put(`https://piratesapp.onrender.com/api/pirate/${params.id}`,data)
            .then((response) => { 
                //console.log(response)  
                console.log('Switch updated:', response.data);
            })
            .catch((error) => {
                console.log(error)
            },[params.id])
        
    }

    /*editPirate(result)*/
    return (
        <div>
            <div>
                <h2>{result.name}</h2>
            </div>
            <div>
                <div>
                    <img src="" alt={result.imageUrl}/>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Position: {result.crewPosition}</p>
                    <p>Treasures: {result.numOfTreasures}</p>
                    <div>
                        <p>Peg Leg: {result.pegLeg ? "yes":"no"} 
                            <Switch
                                checked={result.pegLeg }
                                color="primary"
                                onChange={handleChange('pegLeg')}
                                name="pegLeg"
                            />
                        </p>   
                    </div>
                    <div>
                        <p>Eye Patch: {result.eyePatch? "yes":"no"}
                            <Switch
                                checked={result.eyePatch }
                                color="primary"
                                onChange={handleChange('eyePatch')}
                                name="eyePatch"
                            />
                        </p>
                        
                        
                    </div>
                    <div>
                        <p>Hook Hand: {result.hookHand? "yes":"no"}
                            <Switch
                                checked={result.hookHand}
                                color="primary"
                                onChange={handleChange('hookHand')}
                                name="hookHand"
                            />
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details