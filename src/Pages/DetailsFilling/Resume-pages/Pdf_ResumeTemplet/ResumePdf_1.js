import React, { useRef, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useFormContext } from "../StateMaintain/data_useState";

const ResumePDF = () => {
  const { header } = useFormContext();
  const { firstname, lastname, email, country, pincode, city } = header;


  const resumeRef = useRef();
  useEffect(() => {
    console.log("Updated Header Data:", header);
  }, [header]);
  // Dynamic Color & Font Selection
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

    // Wait for UI updates to apply before capturing
    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true, // Ensures external fonts and images render correctly
      foreignObjectRendering: true, // Allows proper text rendering
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 210 - 20; // A4 width - margins
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div>
      {/* Color & Font Selectors */}
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

      {/* Resume Layout */}
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
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: "0", color: color }}>
            {firstname || "Your First Name"} {lastname || "Your Last Name"}
          </h1>
          <p style={{ fontSize: "14px", color: "#555" }}>
            {email || "your.email@example.com"} | {city || "City"}, {country || "Country"} | {pincode || "000000"}
          </p>
        </div>

        <hr style={{ border: `1px solid ${color}`, margin: "20px 0" }} />
      </div>

      {/* Download Button */}
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
