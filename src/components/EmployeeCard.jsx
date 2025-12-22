
const EmployeeCard = ({emp_name,emp_img,emp_post}) =>{
    return(
        <div className="ecard">
            <div className="ecard__image-wrapper">
                <img src={emp_img} alt={emp_name} />
            </div>
            <div className="ecard__info-wrapper">
                <span>{emp_name}</span>
                <span>{emp_post}</span>
            </div>
        </div>
    );
}

export default EmployeeCard;