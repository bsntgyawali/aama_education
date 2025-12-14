import { useParams } from "react-router-dom";
import destinations from "../data/destinationData";

const AbroadStudy = () => {
    const {countryName} = useParams();

    const country = destinations.find((cname)=>{
        return(
            cname.name.toLowerCase() === countryName.toLowerCase()
        );
    });

    if(!country) return <h2>Country not found</h2>
    return (
        <div className="choice-country">
            <div className="choice__title-wrapper">
                <img src={country.flag} alt="flag" />
                <h2>Study in {country.name}</h2>
            </div>
            <div className="choice__content-wrapper">
                <div className="choice__content-section">
                    <img src={country.image} alt="landmark" />
                    <h3>Why study in the {country.name}?</h3>
                    <p>{country.description}</p>
                </div>
                <div className="choice__content-section">
                    <h3> Benefits of Studying in the {country.name}</h3>
                    <ul>
                       {
                        country.benefits.map((benefit,index)=>{
                            return(
                                <li key={index}>{benefit}</li>
                            );
                        })
                       }
                    </ul>
                </div>
                <div className="choice__content-section">
                    <h3>Popular Courses</h3>
                    <ul>
                        {
                            country.courses.map((course,index)=>{
                                return(
                                    <li key={index}>{course}</li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="choice__content-section">
                    <h3>Part-Time & Post-Study Work</h3>
                    <p>{country.job}</p>
                </div>
            </div>
        </div>
    );
}

export default AbroadStudy;