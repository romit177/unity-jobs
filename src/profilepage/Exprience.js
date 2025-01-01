import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Exprience() {
    const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [educationList, setEducationList] = useState(() => {

    const savedEducation = JSON.parse(localStorage.getItem("education"));
    return savedEducation || [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!school || !degree || !study || !startDate) {
        alert("Please fill in all required fields (School, Degree, Field of Study,Start Date).");
        return;
      }
    
    const newEducation = { school, degree,study,startDate, endDate, description };

    const updatedEducationList = [...educationList, newEducation];
    setEducationList(updatedEducationList);

    localStorage.setItem("education", JSON.stringify(updatedEducationList));

    setSchool("");
    setDegree("");
    setStudy("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };
  return (
    <div className="body2">
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="school">School/University Name:</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="form-control"
           placeholder="Ex:Boston Univercity"
        />
        <br />

        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="form-control"
           placeholder="Ex:Bechelor's"
        />
        <br /> 
        <label htmlFor="study">Field of Study:</label>
        <input
          type="text"
          id="study"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
          className="form-control"
          placeholder="Ex: Computer Science"
        />
        <br />
        

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control"
        />
        <br />

        <label htmlFor="endDate">End Date (Optional):</label>
        <input
          type="month"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control"
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          rows={4}
        />
        <br />
      
        <button type="submit" as={Link} to="/profile" className="submit-button">
          Save Education
        </button>
        
      </form>
    </div>
  )
}

export default Exprience;