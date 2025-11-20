import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {submitted && <p className="success-msg">Thank you! We will contact you soon.</p>}
      <form onSubmit={handleSubmit} className="inquiry-form">
        <label>
          Name*:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </label>

        <label>
          Email*:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
          />
        </label>

        <label>
          Message*:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your inquiry..."
            required
          />
        </label>

        <button type="submit">Submit Inquiry</button>
      </form>
    </>
  );
};

export default Form;
