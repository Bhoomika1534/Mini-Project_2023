import { Link } from 'react-router-dom';
import './Home.css';


const Home =()=>{
    return(
        <div className="home">
<div>
<ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/about">ABOUT US</a></li>
        <li><a href="/offers">DEALS</a></li>
        {/* <li><a href="/about">WISHLIST</a></li> */}
        <li style={{float: 'right'}}><a href="/signin">SIGN IN</a></li>
      </ul>
</div>
<img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131026/Banner_g13wjc.jpg" height="400" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/offers"><b>View Deals→</b></Link></button>
<h2 style={{textAlign:'left'}}>OFFERS AND DEALS</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023675/off3_rtrrjp.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023673/box_ojxozb.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023918/VEGZINGER_yvdiw7.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669023678/off2_rhorig.jpg" height="340" width="320"style={{borderRadius:0}} /></div>
</div>
<button className='ho1'><Link to="/menu"><b>View Menu→</b></Link></button>
<h2 style={{textAlign:'left'}}>CATEGORIES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131574/P2_d8vtf4.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131552/a3_njgirj.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669182910/CD_pwgbof.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669131628/Noo_ffle32.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
</div>
</div>

)
};
export default Home;