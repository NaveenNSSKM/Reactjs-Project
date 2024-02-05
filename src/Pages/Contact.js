import { Outlet,Link } from "react-router-dom";
import "./Layout.css";
import './Contact.css';
import './About.css';
import { useEffect, useState } from "react";


const Contact=()=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[nameError,setNameError]=useState('');
    const[emailError,setEmailError]=useState('');
    const[phoneError,setPhoneError]=useState('');

    useEffect(()=>{
        if(!name){
            setNameError('Name is Required!')
        }
        else{
            setNameError('');

        }
    },[name]);






useEffect(()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email){
        setEmailError('Email is Required!')
    }
    else if(!emailRegex.test(email)){
        setEmailError('Invalid email Format');
    }
    else{
        setEmailError('');
    }
},[email]);


useEffect(()=>{
    const phoneRegex = /^[0-9]{10}$/;
    if(!phone){
        setPhoneError('PhoneNo is Required!')
    }
    else if(!phoneRegex.test(phone)){
        setPhoneError('Invalid PhoneNo Format')

    }
    else{
        setPhoneError('');

    }
},[phone])

const handleSubmit=(e)=>{
    e.preventDefault();

       if (name && email && phone && !nameError && !emailError && !phoneError){
        alert('Form Submitted Successfully...');
    }
    else{
        alert('Form Error, Please Check your Register Form..');
    }
}

    return(
        <>
    
<center>
     <form onSubmit={handleSubmit} style={{backgroundColor:'lightblue',padding:'90px'}}>
        <h1 className="contact-img">Contact US</h1>
        <div className="container">
            
            <input type='text' id="name" className="Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" />
            <br/>
            <br/>
           
            <input type='email' id="email" className="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" />
            <br/>
            <br/>
          
            <input type='tel' id="number" className="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone No" />
            <br/>
            <br/>
            <textarea className="textarea" placeholder="Hello World!.."></textarea>
            <br/>
            <br/>
            <br/>
         <button type="submit" id="btn">Submit</button>
        </div>
     </form>
     </center>


     <div className="row" >
        <center><h1 className="transtionimagecontent">Fashion Highlights</h1></center>
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
       </>
    )
}
export default Contact;