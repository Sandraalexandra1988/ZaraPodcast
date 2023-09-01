import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Podcast = ( { podcast}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        {/* <p>{podcast.id.attributes["im:id"]}</p> */}
        <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
            <Card.Img src={podcast["im:image"][2].label} variant="top" className='rounded-circle'/>
        </Link>

        <Card.Body className="text-center">
            <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                <Card.Title as="div" >
                    <strong>{podcast["im:name"].label}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h5" >
                {podcast["im:artist"].label}
            </Card.Text>

        </Card.Body>
      
    </Card>
  )
}

export default Podcast
