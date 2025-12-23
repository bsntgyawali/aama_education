import employees from "../data/employees";
import EmployeeCard from "./EmployeeCard";
import { useRef, useState, useEffect } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slider = useRef(null);

    function handleClick(direction) {
        if (direction === "previous") {
            setCurrentIndex((index) => index === 0 ? 5 : index - 1);
          
            
        } else if (direction === "next") {
            setCurrentIndex((index) => index === 5 ? 0 : index + 1);
        }
    }

    function slideCard(index){
        slider.current.style.transform = `translateX(-${index * (100/6)}%)`;
    }
    useEffect(() => {
        slideCard(currentIndex);
      
    }, [currentIndex]);


    return (
        <div className="carousel">
            <div  className="carousel__btn previous" onClick={() => handleClick("previous")}>
                &lt;
            </div>

            <div className="carousel__slider" ref={slider}>
                {
                    employees.map((employee) => {
                        return (
                            <EmployeeCard
                                key={employee.id}
                                emp_name={employee.name}
                                emp_img={employee.imgURL}
                                emp_post={employee.designation}
                            />
                        );
                    })
                }
            </div>

            <div className="carousel__btn next" onClick={() => handleClick("next")}>
                &gt;
            </div>
        </div>
    );
};

export default Carousel;
