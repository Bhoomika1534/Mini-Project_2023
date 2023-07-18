import { Link } from 'react-router-dom';
import './Home.css';
import { ArrowRight,FacebookLogo,TwitterLogo,InstagramLogo } from "phosphor-react";
import './footer.css';
import SlideCard from './SlideCard';
import SliderHome from './Slider';


const Home =()=>{
    return(
        <div className="home">
<>
<br/><br/><br/>
     <center> <section className='home'>
        <div className='container d_flex'>
          <SliderHome />
        </div>
      </section></center>
    </>

{/* <img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689141084/banner_sm6hqi.png" height="500px" width="100%" style={{borderRadius:0}} /> */}
<button className='ho1'><Link to="/shop"><ArrowRight size={25} /></Link></button>
<h2 style={{textAlign:'left'}}>Featured Products</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689223278/set-contemporary-house-appliances-standing-parquet-floor_613961-331_gsmmrm.jpg" height="250" width="300" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689141565/dream-kitchen_t9bzrr.jpg" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689141969/10-Must-Have-Appliances-for-Easy-Kitchen-Chores_fczjnd.jpg" height="250" width="300" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/ddcuvoxj7/image/upload/v1689142166/185470131-mixer-and-metal-cookie-cutters-with-kitchen-utensil-for-making-cookies-on-whitebackground-3d-render_mjsny9.jpg" height="250" width="300"style={{borderRadius:0}} /></div>
</div>



<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li><br/>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li><br/>
                <li><a href="#">PAYMENT OPTIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /><FacebookLogo size={30} weight="fill" /></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter" /><TwitterLogo size={30} weight="fill" /></a>
                <a href="https://www.instagram.com/"><i className="fab fa-linkedin-in"/><InstagramLogo size={30} weight="fill" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>
)
};
export default Home;