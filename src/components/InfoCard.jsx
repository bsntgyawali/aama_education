import { Link } from "react-router-dom";
import "./components.css";

const InfoCard = ({cname,imgSource,features}) =>{
    return(
        <div className="country-card">
            <div className="title-wrapper">
                <img src={imgSource} alt="flag of australia" />
                <h3>{cname}</h3>
            </div>
            <div className="content-wrapper">
                <ul>
                    {features.map((f, index)=>{return(
                        <li key={index}>{f}</li>
                    );})}
                </ul>
                <Link to={`/abroadstudy/${cname.toLowerCase()}`}>Learn More</Link>
            </div>

        </div>
    );
}

export default InfoCard;