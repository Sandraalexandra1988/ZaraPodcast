import {useEffect, useState} from 'react'
import { Row, Col} from 'react-bootstrap';
//import products from '../products.js'
import Podcast from '../components/Podcast.jsx';
import fetchPodcasts from '../fetchPodcasts.jsx';


const HomeScreen = () => {
    const [podcasts, setPodcasts] = useState([]);

    const fetchPodcasts = async () => {
        try {
            const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
            const res = await fetch(url);
       
            const dataJson = await res.json();
            if (!res.ok) throw new Error('fetch result null!')
                 let podcasts = dataJson.feed.entry;
                 //const img3 = podcasts[0]["im:name"].label;
                 console.log('podcast')
                 console.log(podcasts)
             

                 let id = podcasts[0].id.attributes["im:id"]
                 let image = podcasts[0]["im:image"][2].label
                 console.log(id)
                 console.log(image)

                 if (podcasts) setPodcasts(podcasts);
                  

                 
                
        } catch (error) {
            console.log(error)
            alert(error)
        }
    };

    useEffect(() => {
        fetchPodcasts();
    },[])


   
  return (
    <Row>
        { podcasts.map((podcast) => (
            <Col key={podcast.id.attributes["im:id"]} sm={12} md={6} lg={4} xl={3}>
                <Podcast podcast={podcast} />

            </Col>
        )) }
      
    </Row>
  )
}

export default HomeScreen
