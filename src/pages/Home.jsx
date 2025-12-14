import check from "../assets/check.svg";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import countries from "../data/infoData";
import CourseCard from "../components/CourseCard";
import classes from "../data/classData";
import services from "../data/servicesData";
import "./styles.css";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div className="home">
     <Hero />
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
      <div className="destination-section" id="abroadStudy">
        <h2>Abroad Study Destination</h2>
        <div className="card-wrapper">
        {
          countries.map((country)=>{
            return (
              <InfoCard 
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
              <CourseCard 
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
      <div className="service-section" id="service">
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
