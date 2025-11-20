import Card from "./Card";
import serviceData from "../data/serviceData";

const Service = () => {
    return (
        <div className="service">
            <h2>Our Services</h2>
            <div className="card__container">
                   {
                        serviceData.map((data) => (
                            <Card
                                key={data.id}
                                cardTitle={data.title}
                                cardImage={data.source}
                                cardDescription={data.description}
                                cardAction={data.action}
                            />
                        ))

                    }
            </div>
        </div>
    );
}

export default Service;