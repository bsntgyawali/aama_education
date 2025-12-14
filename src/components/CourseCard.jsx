import { Link } from "react-router-dom";

const CourseCard = ({cname, source, action}) =>{
    return(
        <div className="course-card">
            <div className="header-wrapper">
                <img src={source} alt="icon"/>
                <h3>{cname}</h3>
            </div>
            <Link to={`/courses/${cname}`}>{action}</Link>
        </div>
    );
}

export default CourseCard;