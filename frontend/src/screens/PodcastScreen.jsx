import React from 'react'
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import products from '../products'

const PodcastScreen = ({product}) => {
    const { id: podcastId } = useParams()
    const podcast = products.find((p) => p._id === podcastId) ;

  return (
    <>
    <Link className='btn btn-light my-3' to="/" >Go Back</Link>
    <Row>
        <Col md={4}>
            <Card>
            <Image src={podcast.image} alt={podcast.name} fluid></Image>
            <ListGroup variant='flush'>
                <ListGroup.Item><h3>{podcast.name}</h3></ListGroup.Item>
                <ListGroup.Item>Description: ${podcast.description}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
        <Col md={8}>
            <Card>
            <ListGroup variant='flush'>
                
                <ListGroup.Item>Episodes: ${podcast.price}</ListGroup.Item>
            </ListGroup>
            </Card>
            <ListGroup variant='flush'>
                <ListGroup.Item><h3>Episodes {podcast.price}</h3></ListGroup.Item>
                
               
            </ListGroup>
            <Card.Body>
            <Link to={`/podcast/${podcast._id}/episode`}>
                <Card.Title as="div">
                    <strong>{podcast.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3">
                ${podcast.price}
            </Card.Text>

        </Card.Body>
          
        </Col>
       
    </Row>
      
    </>
  )
}

export default PodcastScreen
