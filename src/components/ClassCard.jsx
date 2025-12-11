
const ClassCard = ({cname, source, action}) =>{
    return(
        <div className="class-card">
            <div className="header-wrapper">
                <img src={source} alt="icon"/>
                <h3>{cname}</h3>
            </div>
            <a>{action}</a>
        </div>
    );
}

export default ClassCard;