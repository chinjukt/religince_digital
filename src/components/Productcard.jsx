import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row , Col} from 'react-bootstrap';
import './Cardstyle.css';

const Productcard = props =>{ 
    let {image,title,price,offerprice,savedprice} = props.data;
 console.log(image);
  return (
    <div>
        <Card className='cc' style={{ width: '20rem',border:'none',marginLeft:'30px'}}>
                  <Card.Img style={{width:'200px',height:'200px'}} variant="top" src={image} />
                  {/* <Card.Body> */}
                    <Card.Title className='ctitle' style={{color:'#003380',overflow:'hidden'}}>{title}</Card.Title>
                    {/* <Card.Text> */}
                      <p style={{color:'grey'}}>{price}</p>
                      <p style={{color:'grey'}}><strike>{offerprice}</strike></p>
                      <p style={{color:'grey'}}>{savedprice}</p>
                    {/* </Card.Text> */}
                    <Button style={{width:'170px',height:'40px',borderRadius:'25px',backgroundColor:'white',color:'green'}} className='border-success'>OFFERS AVAILABLE</Button>
                  {/* </Card.Body> */}
                </Card>
    </div>
  )
}



export const Allproduct = () =>{
    return(
        <>
        <div>
            <div className='shadow p-3 mb-5 bg-white rounded' style={{marginTop:'20px',height:'500px',width:'100%'}}>

            <h6 style={{marginLeft:'30px',textAlign:'center',fontWeight:'bold'}} className='pb-3 pt-4 pb-4 ml-5 fs-3 d-flex flex-column justify-content-around'>EXPLORE OUR RANGE OF PRODUCTS</h6>



                <Row>
                  <Col className='col-3' style={{overflowY:"hidden"}}>
                  
                  <Card style={{ width: '20rem',border:'none',marginLeft:'30px'}}>
                    <Card.Img  style={{width:'300px',height:'250px'}} variant="top" src="https://www.reliancedigital.in/medias/Apple-Logo.png?context=bWFzdGVyfGltYWdlc3w4MjQ4fGltYWdlL3BuZ3xpbWFnZXMvaGQ3L2hmOS8xMDAyMjUyNjcxMzg4Ni5wbmd8NzUwMzQzNmYwMjJhNGI3MWQ2Y2Y3YTlmNDMwNzRiMmE2MjIzZjRlODlkMjUzZGVjZjdlYjViZWQ3MWVlY2IxNw" />  
                  </Card>
                  </Col>

                  <Col className='col-3'>
                  
                  <Card style={{ width: '20rem',border:'none',marginLeft:'10px'}}>
                    <Card.Img style={{width:'300px',height:'250px'}} variant="top" src="https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA" />  
                  </Card>
                  </Col>


                  <Col className='col-3'>
                  
                  <Card style={{ width: '20rem',border:'none'}}>
                    <Card.Img style={{width:'300px',height:'250px'}} variant="top" src="https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA" />  
                  </Card>
                  </Col>


                  <Col className='col-3'>
                  
                  <Card className='bg-image hover-zoom' style={{ width: '18rem',border:'none'}}>
                    <Card.Img style={{width:'300px',height:'250px'}} variant="top" src="https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg" />  
                  </Card>
                  </Col>
                </Row>

                <div className='d-flex justify-content-center'>
                <button style={{textAlign:'center',marginTop:'40px',padding:'5px 13px',backgroundColor:'#003380',color:'white',borderRadius:'25px'}}>view all</button>
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Productcard