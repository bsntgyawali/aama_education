import hero from "../assets/hero.png";
import check from "../assets/check.svg";
import Destination from "../components/Destination";
import countries from "../data/countries";
import ClassCard from "../components/ClassCard";
import classes from "../data/classes";
import services from "../data/services";
import "./styles.css";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="content-container">
          <h1>Your Trusted Partner for Abroad Studies & Test Preparation</h1>
          <p> We guide you for IELTS/PTE, Documentation & admission — with 100% transparent counselling.</p>
          <div className="link-wrapper">
            <a className="links primary">Book Free Counselling</a>
            <a className="links secondary">Apply for Australia/ Japan/ UK</a>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={hero} />
        </div>
      </div>
      <div className="feature-section">
        <h2>Why Choose Us</h2>
        <div className="list-wrapper">
             <ul>
          <li><img src={check} />Certified & Experienced Counsellors</li>
          <li><img src={check} />Transparent Documentation</li>
        </ul>
         <ul>
          <li><img src={check} />1000+ Successful Students </li>
          <li><img src={check} />Free Career Counselling</li>
        </ul>
        </div>
      </div>
      <div className="destination-section">
        <h2>Abroad Study Destination</h2>
        <div className="card-wrapper">
        {
          countries.map((country)=>{
            return (
              <Destination 
              key={country.id}
              cname = {country.name}
              imgSource = {country.source}
              features={country.features}
              />
            );
          })
       }
     </div>
      </div>
      <div className="preparation-section">
       <h2>Test Preparation</h2>
       <div className="classcard-wrapper">
         {
          classes.map((item)=>{
            return (
              <ClassCard 
              key={item.id}
              cname = {item.name}
              source ={item.image}
              action={item.action}
              />
            );
          })
       }
       </div>
      </div>
      <div className="service-section">
        <h2>Services</h2>
        <div className="card-holder">
        {
          services.map((service)=>{
            return(
              <ServiceCard
              sname={service.name}
              source={service.image}
              />
            );
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Home;
