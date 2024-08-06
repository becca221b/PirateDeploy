import axios from "axios"
import { useState } from "react"
import { useNavigate} from "react-router-dom";
import './AddPirate.style.css'
import { Col, Button, Row, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';


const AddPirate = () =>{
    const [data, setData] = useState({})
    const navigate = useNavigate();
    

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const createPirate = (data) => {
        
        axios.post('https://piratesapp.onrender.com/api/pirate/new',data )
            .then((response) => {
                alert("Added succesfully");
                navigate("/pirates")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleCheckbox = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.checked
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createPirate(data)
        //console.log(data);
        setData({})
    }

    
    return <div>
        
        <div>
            <h2 className="text-center m-4">Add Pirate</h2>
            <Button onClick={()=>navigate(-1)}>Crew Board</Button>
        </div>
        <Row className="m-4">
            <Form action="" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" className='labels' >Pirate Name:</Form.Label>
                    <Col sm="4">
                        <Form.Control 
                            type="text" 
                            name="name" 
                            value={data.name} 
                            onChange={handleChange}  />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" className='labels'>Image Url:</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            type="text" 
                            name="imageUrl" 
                            value={data.imageUrl} 
                            onChange={handleChange} 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" className='labels'>Number of Treasures:</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            className="ml-2" 
                            type="number" 
                            name="numOfTreasures" 
                            value={data.numOfTreasures} 
                            onChange={handleChange} 
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" className="d-flex align-items-center" id="catch">Pirate Catch Phrase:</Form.Label>
                    <Col sm="4">
                        <Form.Control
                            className="" 
                            type="text" 
                            name="catchPhrase" 
                            value={data.catchPhrase} 
                            onChange={handleChange}
                            as="textarea"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4" className='labels'>Crew Position:</Form.Label>
                    <Col sm="4" md="2">
                    <Form.Select 
                        className="ml-2" 
                        type="text" 
                        name="crewPosition" 
                        value={data.crewPosition} 
                        onChange={handleChange}>
                            <option>Captain</option>
                            <option>First Mate</option>
                            <option>Quarter Master</option>
                            <option>Boatswain</option>
                            <option>Powder Monkey</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group className="m-3">
                    <InputGroup className="mb-3 justify-content-center">
                        <Form.Check inline name="pegLeg" className="" onChange={handleCheckbox} type="checkbox" id="cbox1" label="Pegleg"/>
                       
                        <Form.Check inline className="ml-2" name="eyePatch" onChange={handleCheckbox} type="checkbox" id="cbox2" label="Eyepatch"/>
                    
                        <Form.Check inline className="ml-2" name="hookHand" onChange={handleCheckbox} type="checkbox" id="cbox3" label="Hook hand"/>
                    </InputGroup>        
                </Form.Group>
                <div>
                    <Button className="mt-4" type="submit">Add Pirate</Button>
                </div>
            </Form>
        </Row>
        
    </div>
}
export default AddPirate