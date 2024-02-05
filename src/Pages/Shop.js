import { Outlet,Link } from "react-router-dom";

import './Home.css';
import './Shop.css';




import { Button,Carousel,CarouselCaption,Card} from 'react-bootstrap';


const Shop=()=>{
    return(
        <div>
            <div className="product1">
<center><h1 className="title">Categories of The Collections</h1></center>
<center><p className="collections">Pick Your Favourite in Our Collections</p></center>

</div>
      
      <div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh1.png`} className='rounded-circle' alt=""/>
           
            <Button  id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh2.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh4.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>

<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh19.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh13.png`} className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh14.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>



<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh5.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh6.png`} className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh7.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>


<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh9.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh10.png`} className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh11.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>

<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh19.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh13.png`} className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh14.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>

<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh1.png`} className='rounded-circle' alt=""/>
           
            <Button  id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh2.png`} className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh4.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2">Shop</Button>
        </a>
    </div>

    
</div>

<div id='shop' class="row" style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh15.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh18.png`}  className='rounded-circle' alt=""/>
        
            <Button id="Btn2"  className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3">
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh17.png`} className='rounded-circle' alt=""/>
          
            <Button id="Btn3" className="mr-2 mb-5">Shop</Button>
        </a>
    </div>

    
</div>



<footer className="footer">
<div className="container">

<div className="row">

  <div className="col-lg-9 m-auto text-center">
  <h1 className="footer-title">Join Our Style Society</h1>
    <h5 className="footer-subtitle">Product</h5> 
    <h6 className="footer-text">Casual Shoes</h6>
    <h6 className="footer-text">Formal Shoes</h6>
    <h6 className="footer-text">Night Slippers</h6>
  </div>

  <div className="col-lg-9 m-auto text-center">
          
            <h5 className="footer-subtitle1">FAQ's</h5> 
            <h6 className="footer-text1">No E-Charges</h6>
            <h6 className="footer-text1">Shopping & Delivery</h6>
            <h6 className="footer-text1">Always Connect</h6>
          </div>

          <div className="col-lg-9 m-auto text-center">
          
          <h5 className="footer-subtitle2">Contact</h5> 
          <h6 className="footer-text2">PhoneNo:91+9651552684</h6>
          <h6 className="footer-text2">Alternate No:91+9536125168</h6>
          <h6 className="footer-text2">Current Address:Namakkal</h6>
        
        </div>
  </div></div>

       
        
       
      
    </footer>



</div>
    )
}
export default Shop;