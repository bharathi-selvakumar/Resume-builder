import React, { useRef, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useFormContext } from "../StateMaintain/data_useState";
import { Card, Grid, CardContent, Typography, IconButton, } from "@mui/material";

const ResumePDF = () => {
  const { header, skills, newSkill, skillLevel } = useFormContext();

  const { firstname, lastname, email, phone, linkedin, city, state, education, experience, profile } = header;

  const resumeRef = useRef();
  useEffect(() => {
    console.log("Updated Header Data:", header);
  }, [header]);

  const [color, setColor] = useState("#2c3e50");
  const [font, setFont] = useState("Arial");
  const availableFonts = ["Arial", "Times New Roman", "Courier New", "Verdana", "Roboto", "Montserrat"];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(" ", "+")}:wght@400;700&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [font]);

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    await new Promise((resolve) => setTimeout(resolve, 500));
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      foreignObjectRendering: true,
    });
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210 - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <label>Choose Color: </label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <label style={{ marginLeft: "20px" }}>Choose Font: </label>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {availableFonts.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div
        ref={resumeRef}
        style={{
          width: "800px",
          backgroundColor: "#fff",
          padding: "40px",
          fontFamily: font,
          lineHeight: "1.6",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: "0", color: color }}>{firstname || "Your First Name"} {lastname || "Your Last Name"}</h1>
          <p>{email || "your.email@example.com"} | {phone || "123-456-7890"} | {linkedin || "linkedin.com/yourprofile"}</p>
          <p>{city || "City"}, {state || "State"}</p>
        </div>

        <hr style={{ border: `1px solid ${color}`, margin: "20px 0" }} />

        <h2 style={{ color: color }}>Profile</h2>
        <p>{profile || "Write your professional summary here."}</p>

        <h2 style={{ color: color }}>Education</h2>
        <p>{education || "Your Degree Name / Major, University Name, Year"}</p>

        <h2 style={{ color: color }}>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {skill.name} ({skill.level})
            </Typography>
          ))}
        </ul>

        <h2 style={{ color: color }}>Professional Experience</h2>
        {experience ? experience.map((job, index) => (
          <div key={index}>
            <h3>{job.title} | {job.company}, {job.city}, {job.state} ({job.startDate} - {job.endDate})</h3>
            <p>{job.description}</p>
          </div>
        )) : <p>List your work experiences here.</p>}
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          background: color,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume as PDF
      </button>
    </div>
  );
};

export default ResumePDF;
