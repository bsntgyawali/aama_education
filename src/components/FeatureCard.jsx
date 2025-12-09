import icon from "../assets/check-square.svg";

const FeatureCard = ({title,subtitle,properties, action}) => {
    return (
        <div className="feature-card">
            <div className="card-section">
                <div className="title-wrapper">
                <h2>{title}</h2>
                <a>{action}</a>
                </div>
                <p>{subtitle}</p>
            </div>
                <ul>
                    <li><img className="checked-icon" src={icon} alt="checked square"/>{properties[0]}</li>
                    <li><img className="checked-icon" src={icon} alt="checked square" />{properties[1]}</li>
                    <li><img className="checked-icon" src={icon} alt="checked square" />{properties[2]}</li>
                    <li><img className="checked-icon" src={icon} alt="checked square" />{properties[3]}</li>
                </ul>
        </div>
    );
}

export default FeatureCard;