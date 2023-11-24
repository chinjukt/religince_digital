import React from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import './Banner.css'



const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px'
}




const slideImages = [
  {
    url: 'https://www.reliancedigital.in/medias/Air-Purifier-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMjE5MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDc0L2g5NS8xMDA3OTYwODc5OTI2Mi5qcGd8MGY4YWFkN2M1NTlkYTM4NzEwZjBmZmJiZTI4Y2UyY2Y5ZmFkMzVjZTVhMWI0MjZkYzRlNTNmNWE4NDQxNDM0Nw'
  },
  {
    url: 'https://www.reliancedigital.in/medias/Best-Selling-Smartphones-HPMC-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzIzMDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGRkL2gxNy8xMDA3OTYyMzY0MzE2Ni5qcGd8YWIyN2ZlNjJhNGM3YjVlZDhiNjk4YzE5OGI0NzNhZGViZmViZTlkY2YwNDZiZGY2OTE4MWYwY2M4ODgxMjliMw'
  },
  {
    url: 'https://www.reliancedigital.in/medias/Winter-Special-Heating-App-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTUxNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2gwNS8xMDA4MTQ2NzE3MDg0Ni5qcGd8M2Q1Mjg0NjZlMjYyNDc4YTM5MjY5NzQxNjU5MDRkZTRiYzUwYjE5ZDQ1MGYyNjM0N2YyYTQ1NGY0ZTRiZGEzMA'
  },
  {
    url: 'https://www.reliancedigital.in/medias/Audio-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTYyODN8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2gyYy8xMDA3OTYxNjA3Mzc1OC5qcGd8MzUxMzZlNWM4ODlkZDAzMTg1YWJhYjNlYjBiNjEwYTJiNGUzZjdiZmIzMjA5ZWMyOTU3MmUxOWJlNjZjNjliZA'
  },
  {
    url: 'https://www.reliancedigital.in/medias/Washing-Machine-Special-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTI3OTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDYwL2hkNi8xMDA3OTYxNjU5ODA0Ni5qcGd8OTY4YTliZDZlNWE2MmI2MjZkZjQ1NzYxZjk0MWY1YjY1MGFhMmNmMzNhZTgzZjU4NjU1NjU2YTFmZmUwMDBlZQ'
  },
  {
    url: 'https://www.reliancedigital.in/medias/Smart-Televisions3-HPMC-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTcxMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2gzZi8xMDA4MTQ2NzQ2NTc1OC5qcGd8ZDQ3NGNhZDExYWQ0MzA2M2Q5Y2I0MGQ2MDVlZmM5MDA5YjY4NTM0MjM4NmVkYTAyNjY5ODNhNTNmOTYyMDM4Yg'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 


        </Slide>
      </div>
    )
}



export const Banner = () => {
  return(
    <>
    <div style={{marginBottom:'5px'}}>
      <img style={{width:'100%',height:'300px',backgroundSize: 'cover'}} src="https://www.reliancedigital.in/medias/v1-Black-Friday-Carousel-Banner-1365x260px.jpg?context=bWFzdGVyfGltYWdlc3wxMjIwMDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hhYi8xMDA4MTQ4MTg4MzY3OC5qcGd8ODI0NTk4N2Y5YmI4M2JiMDM4NjA4OTlkMWQ5M2E4OTQ0ODM3ODExNzg5MTg2ZTQzNWQ4N2VkMWMzNDZhNTMwYQ" alt="no image" />
    </div>
    </>
  )
}

export default Slideshow;