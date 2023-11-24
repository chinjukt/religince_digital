import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';
// import 'swiper.css';
import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.css';
import Productcard from './Productcard';
import { Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Cardstyle.css';
import Slideshow from './Banner';


function Products() {
   
  return (
    <>

        <div className='mt-3'>
            
            <h6 style={{marginLeft:'30px'}} className='pb-3 pt-3 ml-5 fs-5'>Digital Laptop Carnival - Extra 5% Off at checkout <button style={{marginLeft:'10px',padding:'4px 8px',backgroundColor:'#003380',color:'white'}}>view all</button></h6>

            <div className='shadow p-3 mb-5 bg-white rounded' style={{marginTop:'20px',marginRight:'30px',marginLeft:'30px',height:'500px',width:'100%'}}>

              <Swiper 
              freeMode={true} 
              grabCursor={true}
              modules={[FreeMode]}
              className='mySwipper'
              slidesPerView={1}
              spaceBetween={30}
              >
                <SwiperSlide>
                  <Row>
                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo Ideapad Slim 3 Laptop (Intel Core i3 -',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>
                  

                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-4XIN-IdeaPadFlex5-493838695-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NzM0NHxpbWFnZS9qcGVnfGltYWdlcy9oNGIvaGEyLzEwMDMxOTMyMDE0NjIyLmpwZ3xmY2JjMjJlYzEwYjJjOGJmMzI1MWVkYTQ2YzIyNTIyZmI0NWYwMjFlOTExMzNkNmIwOGYyZTZhNDI5Mzg3MzVh',title:'Lenovo 4XIN IdeaPad Flex 5 Laptop ',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-EWIN-Slim7Pro-493838692-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2Mzg2MHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDU0LzEwMDMxOTI2MTE2MzgyLmpwZ3wxNmJiMmM0YTg1ZDQ0ZDRiY2FhYmVmZDE5ZWJkNDJkMTc2ZmM0ODdlN2NkNGFmM2E2NTNhODk3Nzc3MDI3Mzg0',title:'Lenovo EWIN Yoga Slim 7 Pro Laptop 35.56 cm (14 inch)(493838692)',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo EQIN IdeaPad Slim 3 Laptop 38.1 cm (15.6 inch)(493837781)',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col> 
                  </Row>
                </SwiperSlide>


                <SwiperSlide>
                  <Row>
                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo Ideapad Slim 3 Laptop (Intel Core i3 -',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>
                  

                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo Ideapad Slim 3 Laptop (Intel Core i3 -',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo Ideapad Slim 3 Laptop (Intel Core i3 -',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Lenovo-82RK00VVIN-493839067-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGZkLzEwMDY0Njk3NjU1MzI2LmpwZ3wzYzEzNWIxMDgxYWRlOTZmMmZhNTQyMzk4MTEyMmFmZWNkODkyMzcxMGI5Yzk1OTFkYTU1MWNhODBiNWRjMjhk',title:'Lenovo Ideapad Slim 3 Laptop (Intel Core i3 -',price:'Deal Price:  ₹38,990.00',offerprice:'Offer Price: ₹39,499.00',savedprice:'You Save: 36%(₹21,900)'}}/>
                    </Col> 
                  </Row>
                </SwiperSlide>

              </Swiper>
                
            </div>
        </div>




        <div>
            
            <h6 style={{marginLeft:'30px'}} className='pb-3 pt-2 ml-5 fs-5'>Biggest Offers- Air Purifiers from 7599
             <button style={{marginLeft:'10px',padding:'4px 8px',backgroundColor:'#003380',color:'white'}}>view all</button></h6>

            <div className='shadow p-3 mb-5 bg-white rounded' style={{marginTop:'20px',marginRight:'30px',marginLeft:'30px',height:'500px',width:'100%'}}>

              <Swiper 
              freeMode={true} 
              grabCursor={true}
              modules={[FreeMode]}
              className='mySwipper'
              slidesPerView={1}
              spaceBetween={30}
              >
                <SwiperSlide>
                  <Row>
                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Eureka-Forbes-Air-Purifier-494227632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjY4MHxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDllLzEwMDc3NzEzMDcyMTU4LmpwZ3xmYjU2ZjgzZGJhYmU1Y2M3YjY2OWNiMGM5OGFlOTRlZDdkZDYxOTk0M2UyZDU1YjQ2MzI0M2U0ODQ0NWU1ZWYw',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>
                  

                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Eureka-Forbes-Air-Purifier-494227633-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NTc5NXxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDBkLzEwMDc3NzQ5MTE2OTU4LmpwZ3xhY2RkZjcxYTU1NTNmMmUwOGNkMDBjMGJkNThiZmQ4YWY4MGQyMjZhZmMyNjNkYjc3YzE0OGI4ZDE1YWUwY2Ji',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Philips-AC2959-63-Air-Purifier-491903049-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjk3MnxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDhjLzk0MTM3OTY4MjMwNzAuanBnfGRhNDIyNTZmM2IyZjU4OTFjZTAwYTg5M2Y5NzQ1ZGZmOGYzN2U2Njc3NDg5NWI3MWQ2MzE0MWUyNDk5MGNjZmU',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Eureka-Forbes-Air-Purifier-494227632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjY4MHxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDllLzEwMDc3NzEzMDcyMTU4LmpwZ3xmYjU2ZjgzZGJhYmU1Y2M3YjY2OWNiMGM5OGFlOTRlZDdkZDYxOTk0M2UyZDU1YjQ2MzI0M2U0ODQ0NWU1ZWYw',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col> 
                  </Row>
                </SwiperSlide>

                <SwiperSlide>
                  <Row>
                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Dyson-Cool-Gen1-TP10-Air-Purifier-494227308-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODg4MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGIzLzEwMDY4OTMzMzEyNTQyLmpwZ3w2ODE5Nzc1MTllZmM1YTI4ZGMwNjUxMzkyYjc2NWQ4YjM5OTQ5ZGRiNjE4NzBkZjlmZWM2NGM1ZmU0YjhjYzBj',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>
                  

                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/BLUESTAR-BS-AP300DAI-AIRPURIFIER-491350510-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODY3NXxpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDY4Lzk2ODY0MDk0NDU0MDYuanBnfGEzMWYxMzVmYTI0OTJiNTc2NTExZDI0Y2QxYzI0NjkxOTcyNjFiMTI3NzJjOGE5MzlmNTAzODUyNzQ2ZmZkMDc',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Eureka-Forbes-Air-Purifier-494227632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjY4MHxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDllLzEwMDc3NzEzMDcyMTU4LmpwZ3xmYjU2ZjgzZGJhYmU1Y2M3YjY2OWNiMGM5OGFlOTRlZDdkZDYxOTk0M2UyZDU1YjQ2MzI0M2U0ODQ0NWU1ZWYw',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Eureka-Forbes-Air-Purifier-494227632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjY4MHxpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDllLzEwMDc3NzEzMDcyMTU4LmpwZ3xmYjU2ZjgzZGJhYmU1Y2M3YjY2OWNiMGM5OGFlOTRlZDdkZDYxOTk0M2UyZDU1YjQ2MzI0M2U0ODQ0NWU1ZWYw',title:'Eureka Forbes 355 Air Purifier(494227632)',price:'Offer Price:  ₹14,999.00',offerprice:'MRP: ₹19,000.00',savedprice:'You Save: 21%(₹4,001)'}}/>
                    </Col> 
                  </Row>
                </SwiperSlide>

              </Swiper>
                
            </div>
        </div>



        <div>
            <div className='shadow p-3 mb-5 bg-white rounded' style={{marginTop:'20px',height:'400px',width:'100%'}}>

            <h6 style={{marginLeft:'30px'}} className='pb-3 pt-4 pb-4 ml-5 fs-5'>Great Deals on Electronics</h6>

                <Row>
                  <Col className='col-3'>
                  
                  <Card style={{ width: '20rem',border:'none',marginLeft:'30px'}}>
                    <Card.Img  variant="top" src="https://www.reliancedigital.in/medias/Large-Appliances.jpg?context=bWFzdGVyfGltYWdlc3wzMzM1OXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaGQwLzEwMDc5NjE3MjUzNDA2LmpwZ3xhNjkwZTYzMTgwNjJmY2MxMjRiNjYwYjBlOWFkZGI2MDYzNGQyODEyMDUwNTFlMzliYjA3ZjEzMGMyZGEwMjNl" />  
                  </Card>
                  </Col>

                  <Col className='col-3'>
                  
                  <Card style={{ width: '20rem',border:'none',marginLeft:'10px'}}>
                    <Card.Img variant="top" src="https://www.reliancedigital.in/medias/Big-Screen-TVs.jpg?context=bWFzdGVyfGltYWdlc3w4Mzc4OXxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaGVjLzEwMDc5NjE3NDUwMDE0LmpwZ3xhNGU5MWY4MWNlOGQ4OTU3ODdmNDRhY2ExNGE1ZmMzMDZjODFlNjNiMDFhZjg2YWIwZTRlNGYxNDYzZGQxMDBm" />  
                  </Card>
                  </Col>


                  <Col className='col-3'>
                  
                  <Card style={{ width: '20rem',border:'none'}}>
                    <Card.Img variant="top" src="https://www.reliancedigital.in/medias/Personal-Care-Appliances.jpg?context=bWFzdGVyfGltYWdlc3w0Mjg5MXxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaGEyLzEwMDc5NjE3MzE4OTQyLmpwZ3xiZjhiYzA4MTEyNTRiMzk3YjY0YTVjNmE1NTFiMDUyYmQ3MmNhOTQ2YjU5ZWJiNDkwYmRkZjQyMzAwZTQyYmFk" />  
                  </Card>
                  </Col>


                  <Col className='col-3'>
                  
                  <Card className='bg-image hover-zoom' style={{ width: '20rem',border:'none'}}>
                    <Card.Img style={{objectFit:'cover'}} variant="top" src="https://www.reliancedigital.in/medias/Smartwatches.jpg?context=bWFzdGVyfGltYWdlc3w1MTE1N3xpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDYwLzEwMDc5NjE3NTE1NTUwLmpwZ3w1N2MwOGYwMGFjZTFjYzYzY2JjYWVkMjMyNDdjY2Y2Y2ZmYzM3ZDRiYjQzMDQ1MWU3ZDEwZDRhNzFlOTZkZDli" />  
                  </Card>
                  </Col>
                </Row>
                
            </div>
        </div>
        


        <div>
            
            <h6 style={{marginLeft:'30px'}} className='pb-3 pt-2 ml-5 fs-5'>Best Selling Microwaves | Upto 50% Off
             <button style={{marginLeft:'10px',padding:'4px 8px',backgroundColor:'#003380',color:'white'}}>view all</button></h6>

            <div className='shadow p-3 mb-5 bg-white rounded' style={{marginTop:'20px',marginRight:'30px',marginLeft:'30px',height:'500px',width:'100%'}}>

              <Swiper 
              freeMode={true} 
              grabCursor={true}
              modules={[FreeMode]}
              className='mySwipper'
              slidesPerView={1}
              spaceBetween={30}
              >
                <SwiperSlide>
                  <Row>
                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Ifb-Microwave-Oven-493715497-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzI3NHxpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGZlLzEwMDMyOTY0NTY3MDcwLmpwZ3xhZDFmZTYzZTUzMDY0YWIxYzViMjU0OTI5ZjhhNzEyNzczYzdjZDEzMGFjNDkwZmY3MWZjMjE2MTk5MTE2MDc1',title:'IFB 30BRC3 Convection Microwave Oven 30 L(493715497)',price:'Offer Price:  ₹19,700.00',offerprice:'MRP: ₹24,299.00',savedprice:'You Save: 19%(₹4,599)'}}/>
                    </Col>
                  

                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/Samsung-MC28A5145VK-TL-CONVECTION-491998058-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkzNnxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDNmLzk3MzQ4NDU2NjEyMTQuanBnfDQ2NjhmZDgyZDE0YjFiNWE5Njk3NmQ0ZGE0OGIxYjQ5YTJkN2UzYmYwMTU0ODBhOTgyZDRkNmU2ZjhiMjgzYjU',title:'IFB 30BRC3 Convection Microwave Oven 30 L(493715497)',price:'Offer Price:  ₹19,700.00',offerprice:'MRP: ₹24,299.00',savedprice:'You Save: 19%(₹4,599)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/LG-MJ2886BWUM-Microwave-Ovens-491392151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oODUvaDRkLzg5Nzk4MTkzMzE2MTQuanBnfDQ5NjNkNTc2ODRjN2M0MzZhZTUzYTAyZjQ5MzljYjczNjEwNTQ4ODI2NjllMzQ4MTVjM2FkOWRhN2QxMmYwOWQ',title:'IFB 30BRC3 Convection Microwave Oven 30 L(493715497)',price:'Offer Price:  ₹19,700.00',offerprice:'MRP: ₹24,299.00',savedprice:'You Save: 19%(₹4,599)'}}/>
                    </Col>


                    <Col className = 'col-3'>
                    <Productcard data ={{image:'https://www.reliancedigital.in/medias/IFB-20PM-MEC2-SOLO-GRILL-492573199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDUyLzk4NDU3Njg5Nzg0NjIuanBnfGRmNzJhNWE3YWEyNWM2OGJmNzQ0NWRjODZlMTcyM2FiNzVlMzYwM2YyYTdmNjkzN2JlNjUwNzI5NGI1NTA5OTU',title:'IFB 30BRC3 Convection Microwave Oven 30 L(493715497)',price:'Offer Price:  ₹19,700.00',offerprice:'MRP: ₹24,299.00',savedprice:'You Save: 19%(₹4,599)'}}/>
                    </Col> 
                  </Row>
                </SwiperSlide>
              </Swiper>
                
            </div>
        </div>



        <Slideshow/>

        

    </>
  )
}

export default Products