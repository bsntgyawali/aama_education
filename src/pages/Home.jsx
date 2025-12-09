import { Link } from "react-router-dom";
import features from "../data/features";
import FeatureCard from "../components/FeatureCard";
import "./pages.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero__content-wrapper">
          <p>our objective</p>
          <h1>Helping Student ShapeTheir Future</h1>
          <p>Join thousands of students who chose <span className="hero__highlight">Aama Education Services </span>
            to guide them and fulfill their international dream.
          </p>
          <Link>Get Started</Link>
        </div>
      </div>
      <div className="about-section">
        <img src="/images/expert.png" />
        <div className="about__content-wrapper">
          <h2>We are we?</h2>
          <p>
            Aama Education Services is not just an institution,
            it is a vision and an ambition to help Nepalese students
            reach and succeed in the global market. To accomplish such an ambitious goal,
            we at Aama Education Services have been working rigorously in this field for more than half a decade.
          </p>
          <Link to="/about">Learn More</Link>
        </div>
      </div>
      <div className="features-section">
        <h2 className="section-title">Why Choose AES?</h2>
        <div className="card-wrapper">
          {
            features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                subtitle={feature.subtitle}
                properties={feature.properties}
                action={feature.action}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;