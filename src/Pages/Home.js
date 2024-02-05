import { Outlet } from "react-router-dom";
import "./Layout.css";
import './Home.css';

import { Button,Carousel,CarouselCaption,Card} from 'react-bootstrap';


const Home=()=>{
    return(
   
         <div>
     
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={`${process.env.PUBLIC_URL}/Images/car1.png`} class="d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/Images/sh4.png`} class="d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={`${process.env.PUBLIC_URL}/Images/car2.png`} class="d-block w-100" alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div className="product">
<center><h1>Categories of The Month</h1></center>
<center><img id="midimg" src={`${process.env.PUBLIC_URL}/Images/mid.png`} className='rounded-circle' alt=""/></center>
</div>

<div className="row mt-5">
<p id="shoedata" className="text-center">Introducing our latest shoe collection, crafted with precision and style to elevate your every step. From sleek sneakers designed for urban explorers to elegant heels perfect for evening Styles, our collection offers a wide range of footwear to suit every occasion. Whether you're seeking comfort, durability, or runway-worthy flair, our meticulously curated selection guarantees to fulfill your footwear desires. Step into sophistication and make a statement with our versatile and fashion-forward designs. Discover the perfect pair to complement your unique style and step confidently into the world with our exceptional shoe collection</p>
</div>




<div id="thumb" class="row"  style={{background:'lightblue'}} >
<center><h4 className="homecollect">Latest Style Collections</h4></center>
    <div class="col-md-3 mb-3">
   
        <a href="#" class="thumbnail">
            <img src={`${process.env.PUBLIC_URL}/Images/sh1.png`} className='rounded-circle' alt=""/>
           
            <Button id="Btn1" className="mr-2">Shop</Button>
        </a>
    </div>
    <div class="col-md-3 mb-3"  >
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

<div class="row"  style={{background:'lightblue'}}>
    <div class="col-md-3 mb-3"  style={{background:'lightblue'}}>
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
          
            <Button id="Btn3" className="mr-2 mb-5">Shop</Button>
        </a>
    </div>

    
</div>


<div className="row" >
<center><h1 className="transtionimagecontent">Trending Now</h1></center>
<div className="gallery">
<img src={`${process.env.PUBLIC_URL}/Images/sh1.png`} className="image" alt=""/>
<img src={`${process.env.PUBLIC_URL}/Images/sh4.png`} className="image" alt=""/>
<img src={`${process.env.PUBLIC_URL}/Images/sh14.png`} className="image" alt=""/>
<img src={`${process.env.PUBLIC_URL}/Images/sh12.png`} className="image" alt=""/>
<img src={`${process.env.PUBLIC_URL}/Images/sh16.png`} className="image"  alt=""/>


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
          <h6 className="footer-text2">Current Address : Namakkal</h6>
        </div>
  </div></div>

       
 
       
      
    </footer>








        </div>
        
      
    );
    
}
export default Home;