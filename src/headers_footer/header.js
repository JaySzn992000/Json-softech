import React from "react";
import { useNavigate } from "react-router";
import "./header.css";

const Header = () => {

const naviAbout = useNavigate()
const naviToAboutus = () => {
naviAbout('/Aboutus')
}

const naviContact = useNavigate();
const naviToContactus = () => {
naviContact('/Contactpage')
}

return (

<header className="header">
<div>
<h1>
Json <br /> Softech
</h1>
<p>
JSON Softech is a dynamic IT company 
focused on delivering tailored digital solutions. 
We specialize in professional web development 
services for small and mid-size businesses, 
ensuring innovative, practical, and result-oriented
approaches in every project. 
Our goal is to provide reliable solutions that 
support business growth and long-term success.
</p>
</div>

<ul>
<h1>Get In Touch</h1>
<h2 style={{ color: "white" }}>Email & Mob:</h2>
<li>
<a href="mailto:Jsonsoftech@gmail.com">Jsonsoftech@gmail.com</a>
</li>
<li>
<a href="tel:+919311071290">Mob : +91 93110 71290</a>
</li>
</ul>

<ul>
<li>
<a href="index.html">Home</a>
</li>
<li>
<a  onClick={naviToAboutus}>About us</a>
</li>
<li>
<a onClick={naviToContactus}>Contact us</a>
</li>
</ul>

<ul>
// <li>
// <a href="#">Digital Marketing</a>
// </li>
<li>
<a href="#">Web Development</a>
</li>
// <li>
// <a href="#">Hosting Service</a>
// </li>
<li>
<a href="#">e-Commerce Website</a>
</li>
<li>
<a href="#">Logo designing</a>
</li>
<li>
<a href="#">Web designing</a>
</li>
</ul>
</header>
);

};

export default Header;
