import "./components.css";

const Destination = ({cname,imgSource,features}) =>{
    return(
        <div className="country-card">
            <div className="title-wrapper">
                <img src={imgSource} alt="flag of australia" />
                <h3>{cname}</h3>
            </div>
            <div className="content-wrapper">
                <ul>
                    <li>{features[0]}</li>
                    <li>{features[1]}</li>
                    <li>{features[2]}</li>
                </ul>
                <a>Learn More</a>
            </div>

        </div>
    );
}

export default Destination;