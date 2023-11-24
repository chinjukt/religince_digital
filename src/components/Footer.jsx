import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
    <div style={{height:'600px',backgroundColor:'#003380',color:'white'}} className='d-flex justify-content-center w-100 flex-column'>
        <Row className='d-flex justify-content-evenly w-100' style={{marginLeft:'30px'}}>
            <Col className='col-3' >
                <h4 className='mb-3' style={{overflowY:'hidden'}}> PRODUCT CATEGORIES</h4>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Smartphones</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Laptops</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>DSLR Cameras</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Televisions</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Air Conditioners</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Refrigerators</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Kitchen Appliances</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Accessories</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Personal Care & Grooming</a></p>
                
            </Col>

            <Col className='col-3'>
            <h4 className='mb-3' style={{overflowY:'hidden'}}>
                SITE INFO</h4>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>About Reliance Digital</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>resQ Services</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Site Map</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Gift Cards</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Corporate Enquires</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Contact Us</a></p>
                
                
            </Col>

            <Col className='col-3'>
            <h4 className='mb-3' style={{overflowY:'hidden'}}>
                RESOURCE CENTRE</h4>
                <p><a href="" style={{textDecoration:'none',color:'white'}}> Product Reviews</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Buying Guides</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>How Tos</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Featured Storis</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Events & Happenings</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Nearest Store</a></p>
                
                
            </Col>

            <Col className='col-3'>
            <h4 className='mb-3' style={{overflowY:'hidden'}}>
                POLICIES</h4>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Terms of Use</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>FAQs</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Cancellation and Return Policy</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Pricing and Payments Policy</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Shipping Delivery Policy</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Privacy Policy</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>E-waste Recycling Policy</a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>EMI and Additional Cashback T&C </a></p>
                <p><a href="" style={{textDecoration:'none',color:'white'}}>Caution Notice</a></p>
                
            </Col>
            
        </Row>

        <Row style={{marginLeft:'30px',marginTop:'50px'}}>
          <Col className='col-3'>
          <h5 className='mb-3' style={{overflowY:'hidden'}}>
          FOLLOW US</h5>
          
          <a href=""><i class="fa-brands fa-facebook" style={{color:'white',marginRight:'10px',fontSize:'21px'}}></i></a>
          <a href=""><i class="fa-brands fa-twitter" style={{color:'white',marginRight:'10px',fontSize:'21px'}}></i></a>
          <a href=""><i class="fa-brands fa-youtube" style={{color:'white',fontSize:'21px'}}></i></a>

          </Col>
          <Col className='col-4'>
          <h5 className='mb-3' style={{overflowY:'hidden'}}>
          EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h5>
          <img style={{width:'150px',height:'50px',marginRight:'10px'}} src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" />
          <img style={{width:'150px',height:'50px'}} src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
          </Col>
          <Col className='col-2'></Col>
          <Col className='col-3'></Col>
        </Row>
        
    </div>
    <div>
      <div style={{height:'250px',backgroundColor:'#0a244a',color:'white',overflowY:'hidden'}} className=' w-100'>
        <h6 style={{textAlign:'center',overflowY:'hidden',paddingTop:'20PX'}}><u style={{paddingTop:'3px'}}>Disclaimer</u></h6>
        <p style={{padding:'20px 90px',textAlign: 'justify'}}>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        <hr />
        <p style={{textAlign:'center'}}>© 2023 Reliance Digital. All Rights Reserved.</p>
      </div>
    </div>

    </>
  )
}

export default Footer