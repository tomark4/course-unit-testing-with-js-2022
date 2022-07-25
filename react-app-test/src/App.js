import { useState } from "react";

function App() {
  const [bmiEstimation, setBmiEstimation] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [formValues, setFormValues] = useState({
    weight: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height } = formValues;
    const result = calculateBmi({ weight, height });
    setBmi(Number(result));
    setBmiEstimation(calculateBmiEstimation(result));
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const calculateBmi = ({ weight, height }) => {
    return weight / (height * height);
  };

  const calculateBmiEstimation = (bmi) => {
    if (bmi <= 18.5) {
      return "Peso inferior al normal";
    }

    if (bmi > 18.5 && bmi < 24.9) {
      return "Peso normal";
    }

    if (bmi > 25 && bmi < 29.9) {
      return "Sobrepeso";
    }

    return "Obesidad";
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 mx-auto">
          <h1>BMI Calculator</h1>
          {bmi && <h3>Bmi: {bmi.toLocaleString()}</h3>}

          {bmiEstimation && <h4>Bmi estimation: {bmiEstimation}</h4>}

          <hr />

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                type="text"
                name="weight"
                id="weight"
                className="form-control"
                value={formValues.weight}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="height">Height (M)</label>
              <input
                type="text"
                name="height"
                id="height"
                className="form-control"
                value={formValues.height}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary" name="send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
