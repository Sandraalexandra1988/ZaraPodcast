import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'

const Searchbox = () => {
    const navigate = useNavigate();
    const { keyword: urlKeyword} = useParams();
    const [keyword, setKeyword] = useState(urlKeyword || '')
  return (
    <Form onsubmit='' className='d-flex'>
        <Form.Control
        type='text' 
        name='q'
        onChange={(e)=> setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        >

        </Form.Control>
        <Button type='submit' variant='outline-info' className='  p-2 mx-2'>Search</Button>
      
    </Form>
  )
}

export default Searchbox
 