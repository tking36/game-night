import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {addPlayer} from '../actions/playerActions'

const AddPlayer = () => {
    const dispatch = useDispatch();
    const players = useSelector(state => state.player.players);
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPlayer(name))
        setName('')
    }


  return (
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='add-player' >Name:</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
        <Button variant="primary" type="submit"  >
            Submit
        </Button>
    </Form>



  )
}

export default AddPlayer