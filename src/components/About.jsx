import image from "../assets/consult.png";
const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 >About Us</h2>

        <p className="about__text">
          We are a trusted education consultancy dedicated to guiding students 
          toward life-changing academic opportunities abroad. 
          With years of experience, expert counselors, and partnerships with top universities,
          we provide personalized support from course selection to visa approval.
        </p>

        <p className="about__text">
          Our mission is simple: to empower students with the knowledge, confidence,
          and resources they need to succeed in their global education journey.
          We turn aspirations into real possibilities.
        </p>

        <button className="about__btn">Learn More</button>
      </div>

      <div className="about__image-container">
        <img 
          src={image} 
          alt="Students discussing study abroad plans"
        />
      </div>
    </section>
  );
};

export default AboutSection;
