import React , { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios"
import "./ListPirates.css";

const ListPirates = (props) =>{
    const navigate = useNavigate();

    const [user, setUser] = useState({ email: null, role: 'customer' });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser({ email: decoded.username, role: decoded.role });
        }
    }, []);
    
    
    //console.log(props)

    
    const remove = (e) =>{
        axios.delete(`https://piratesapp.onrender.com/api/pirate/delete/${e.target.value}/`)
      
        .then(alert("Man in the water! Bye Bye!"))
        
        .catch( err => console.log(err));
    } 

   
    return(
        <div>
        {props.pirates.map((pirate, index) => {
            return <div key={pirate._id} className='container text-center'id="container">
                <div className='row d-flex align-items-center'>
                    <div className='col'>
                        <img src={pirate.imageUrl}  id="pirate-photo" alt="profile photo" />
                    </div>
                    

                    <div className='col'>
                        <p className="title">{pirate.name}</p>
                        
                        <div className="">
                            <Button className="btn me-2 mb-2" onClick={()=>{navigate("/pirate/"+pirate._id)}}>View Pirate</Button>
                            {user.role === 'admin' && (
                                <Button className="btn mb-2" value={pirate._id} onClick={remove}>Walk the Plank</Button>
                            )}
                            
                        </div>
                    </div>
                </div>   
            </div>    
        })}
        </div>  
    )
}
export default ListPirates    