// import {useEffect, useState} from 'react'

// const [podcasts, setPodcasts] = useState([]);

// const fetchPodcasts = async () => {
//     try {
//         const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
//         const res = await fetch(url);
   
//         const dataJson = await res.json();
//         if (!res.ok) throw new Error('fetch result null!')
//              let podcasts = dataJson.feed.entry;
//              //const img3 = podcasts[0]["im:name"].label;
//              console.log('podcast')
//              console.log(podcasts)
         

//              let id = podcasts[0].id.attributes["im:id"]
//              let image = podcasts[0]["im:image"][2].label
//              console.log(id)
//              console.log(image)

//              if (podcasts) setPodcasts(podcasts);
              

             
            
//     } catch (error) {
//         console.log(error)
//         alert(error)
//     }
// };

// useEffect(() => {
//     fetchPodcasts();
// },[])

// export default fetchPodcasts;