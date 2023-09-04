import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'


const PodcastScreen = ({product}) => {

    const [podcasts, setPodcasts] = useState([]);

    const fetchPodcasts = async () => {
        try {
            const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
            const res = await fetch(url);
       
            const dataJson = await res.json();
            if (!res.ok) throw new Error('fetch result null!')
                 let podcasts = dataJson.feed.entry;
                 if (podcasts) setPodcasts(podcasts);
        } catch (error) {
            console.log(error)
            alert(error)
        }
    };

    useEffect(() => {
        fetchPodcasts();
    },[])

    const { id: podcastId } = useParams()

    const podcast = podcasts.find((p) => p.id.attributes['im:id'] === podcastId) ;
    console.log(podcast)

  return (
    <>
    <Link className='btn btn-light my-3' to="/" >Go Back</Link>
    {/* <Image src={podcast['im:image'][0].label} alt={podcast['im:name'].label} fluid ></Image> */}
    {/* <p>{podcast.title.label}</p> */}
    {/* <Card.Img src={podcast['im:image'][1].label} variant="top" className='rounded-circle'/> */}
    <Row>

    <Col md={4}>
            <Card>
            <Image src={podcast['im:image'][2].label} alt={podcast['im:name'].label} rounded fluid className=' p-4' ></Image>
            <ListGroup variant='flush'>
                <ListGroup.Item><h4>{podcast['im:name'].label}</h4><p> by {podcast['im:artist'].label}</p></ListGroup.Item>
                <ListGroup.Item><p ><strong>Description:</strong></p> {podcast.summary.label}</ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>

        <Col md={8}>
            <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item as='h3'>Episodes: 66 </ListGroup.Item>
            </ListGroup>
            </Card>

            <Card className='mt-5'>
                <p>test</p>
            </Card>
        </Col>
  
        {/* <Col md={8}>
            <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>Episodes: 66 </ListGroup.Item>
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
          
        </Col> */}
       
    </Row>
      
    </>
  )
}

export default PodcastScreen
