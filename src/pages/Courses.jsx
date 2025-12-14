import { useParams } from "react-router-dom";
import courseDetails from "../data/courseDetails";

const Courses = () => {
  const { courseName } = useParams();

  const course = courseDetails.find(
    item => item.cname.toLowerCase() === courseName.toLowerCase()
  );

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="courses">
      <div className="courses__section-one">
        <h2>All you need to know about {course.cname}</h2>
        <p>{course.description[0]}</p>
      </div>
      <div className="courses__section-two">
        <h3>How does {course.cname} work?</h3>
        <p>{course.description[1]}</p>
      </div>
      <div className="courses__section-three">
        <h3>{course.cname} Test Format</h3>

        {course.testSection.map((section, index) => (
          <dl key={index}>
            <dt>{section}</dt>
            <dd>{course.sectionContent[index]}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default Courses;
