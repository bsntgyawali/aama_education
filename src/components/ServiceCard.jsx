const ServiceCard = ({source,sname})=>{
    return(
        <div className="service-card">
            <img src={source} />
            <h3>{sname}</h3>
        </div>
    );
}

export default ServiceCard;