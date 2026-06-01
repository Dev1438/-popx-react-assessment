import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Invalid Email");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    navigate("/profile");
  };

  return (
    <div className="page signup-page">
      <h1>Create your PopX account</h1>

      <div className="input-group">
        <label>Full Name *</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Phone Number *</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Email Address *</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Company Name</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="radio-group">
        <p>Are you an Agency?</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={formData.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={formData.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button
        className="primary-btn create-btn"
        onClick={handleSubmit}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;