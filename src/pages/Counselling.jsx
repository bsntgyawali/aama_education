import Form from "../components/Form";

const Counselling = () => {
    return (
        <div className="counselling">
            <div className="counselling__content-wrapper">
                <h2>Book Free Counselling</h2>
                <p>Planning to study abroad? Start your journey with a completely free, personalized counselling session at Aama Education Services.
                    Our expert counsellors help you explore study destinations,
                    understand course options, and guide you through every step of the process.</p>
                <h3>What You Will Receive in Your Free Counselling:</h3>
                <ul>
                    <li>Personalized Career Assessment</li>
                    <li>Country & Course Recommendations</li>
                    <li>University Selection Guidance</li>
                    <li>Visa Eligibility Check</li>
                    <li>Cost & Scholarship Breakdown</li>
                    <li>Step-by-Step Study Abroad Roadmap</li>
                </ul>
            </div>
            <Form title="Book Your Free Counselling" action="Book"/>
        </div>
    );
}

export default Counselling;