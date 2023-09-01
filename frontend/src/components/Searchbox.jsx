import React from 'react'

const Searchbox = () => {
  return (
    <Form onsubmit='' className='d-flex'>
        <Form.Control
        type='text' 
        name='q'
        onChange={(e)=> setKeyword(e.target.value)}
        >

        </Form.Control>
      
    </Form>
  )
}

export default Searchbox
