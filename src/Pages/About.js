import { Outlet,Link } from "react-router-dom";
import { Button,Carousel,CarouselCaption,Card} from 'react-bootstrap';
import "./Layout.css";
import './About.css';
import Scrollspy from 'react-scrollspy';


const About=()=>{
    return(
   
<div>

<div id='Heading'><h1 id="about">ABOUT US</h1></div>

<div  id='aboutdetails' className="row" style={{backgroundColor:'lightblue'}}>

    
<div className="col-md-2 mb-2">

<div id="content1">
<img src={`${process.env.PUBLIC_URL}/Images/history.png`} className='historyimage' alt=""/>
<h3 class="heading1"> History</h3>
<p class="para1">Established in 2020, our shoe shop has a rich and vibrant history that spans decades. It all started with a humble storefront in Namakkal, where our founders, Naveen Kumar, shared a common passion for footwear and a vision to offer more than just shoes – they aimed to provide an unparalleled shopping experience for shoe enthusiasts.</p>

</div>

</div>

<div className="col-md-2 mb-2">

<div id="content2">
<img src={`${process.env.PUBLIC_URL}/Images/mission1.png`} className='missionimage' alt=""/>
<h3 class="heading2"> Mission</h3>
<p class="para2">At Happy Feet, our mission is simple: to provide our customers with the finest selection of footwear while delivering unparalleled service and style expertise. We strive to offer an exceptional shopping experience by curating a diverse range of shoes that cater to every taste, occasion, and lifestyle.</p>

</div>

</div>

<div className="col-md-2 mb-2">

<div id="content3">
<img src={`${process.env.PUBLIC_URL}/Images/team.png`} className='teamimage' alt=""/>
<h3 class="heading3">Team</h3>
<p class="para3">Our dedicated team at Happy Feet is the heart and sole of our operation. Comprised of passionate individuals who share a love for footwear and a commitment to excellence, our team brings a wealth of experience and expertise to every aspect of our business.  </p>

</div>

</div>




</div>

<div className="row" >
<center><h1 className="transtionimagecontent">Featured Styles</h1></center>
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
          <h6 className="footer-text2">Current Address:Namakkal</h6>
        </div>
  </div></div>

       
 
       
      
    </footer>


</div>




      
        
    )
}
export default About;