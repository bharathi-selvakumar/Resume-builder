// import React, { useRef, useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import { useFormContext } from "../StateMaintain/data_useState";
// import { Container,Grid } from "@mui/material";

// const ResumePDF = () => {
//   const { header } = useFormContext();
//   const { firstname, lastname, email, country, pincode, city } = header;
  
//   const resumeRef = useRef(); // Reference to resume section

//   // Dynamic Color & Font Selection
//   const [color, setColor] = useState("#2c3e50");
//   const [font, setFont] = useState("Arial");

//   const availableFonts = [
//     "Arial", "Times New Roman", "Courier New", "Verdana", "Roboto", "Montserrat"
//   ];

//   // Load selected font dynamically
//   useEffect(() => {
//     const fontLink = document.createElement("link");
//     fontLink.href = `https://fonts.googleapis.com/css2?family=${font.replace(" ", "+")}:wght@400;700&display=swap`;
//     fontLink.rel = "stylesheet";
//     document.head.appendChild(fontLink);
//   }, [font]);

//   // Debugging: Log header updates
//   useEffect(() => {
//     console.log("Updated Header Data:", header);
//   }, [header]);

//   // PDF Generation & Download
//   const handleDownloadPDF = async () => {
//     try {
//       const element = resumeRef.current;
//       if (!element) {
//         console.error("Resume element not found!");
//         return;
//       }

//       // Small delay to allow UI updates
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       // Capture resume as image using html2canvas
//       const canvas = await html2canvas(element, {
//         scale: 2, // High resolution
//         useCORS: true, // Fix for images/fonts
//         logging: false, // Reduce console logs
//         foreignObjectRendering: true // Better text rendering
//       });

//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgData = canvas.toDataURL("image/png");
//       const imgWidth = 210 - 20; // A4 width - margins
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
//       pdf.save("resume.pdf");

//       console.log("PDF Downloaded Successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <Container>
//       <Grid item  xs={12} sm={10} md={8} lg={6} width="100%" margin= "auto">
//     <div>
//       {/* Color & Font Selectors */}
//       <div style={{ marginBottom: "20px" }}>
//         <label>Choose Color: </label>
//         <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        
//         <label style={{ marginLeft: "20px" }}>Choose Font: </label>
//         <select value={font} onChange={(e) => setFont(e.target.value)}>
//           {availableFonts.map((f) => (
//             <option key={f} value={f}>{f}</option>
//           ))}
//         </select>
//       </div>

//       {/* Resume Layout */}
//       <div
//         ref={resumeRef}
//         style={{
//           width: "800px",
//           backgroundColor: "#fff",
//           padding: "40px",
//           fontFamily: font,
//           lineHeight: "1.6",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
//         }}
//       >
//         {/* Header Section */}
//         <div style={{ textAlign: "center", marginBottom: "20px" }}>
//           <h1 style={{ margin: "0", color: color }}>
//             {firstname || "Your First Name"} {lastname || "Your Last Name"}
//           </h1>
//           <p style={{ fontSize: "14px", color: "#555" }}>
//             {email || "your.email@example.com"} | {city || "City"}, {country || "Country"} | {pincode || "000000"}
//           </p>
//         </div>
//         <hr style={{ border: `1px solid ${color}`, margin: "20px 0" }} />
//       </div>

//       {/* Download Button */}
//       <button
//         type="button"
//         onClick={handleDownloadPDF}
//         style={{
//           marginTop: "20px",
//           padding: "10px 15px",
//           background: color,
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Download Resume as PDF
//       </button>
//     </div>
//     </Grid>
//     </Container>
//   );
// };

// export default ResumePDF;



// import React, { useRef, useState, useEffect } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import { useFormContext } from "../StateMaintain/data_useState";
// import { Card, Container, Grid } from "@mui/material";

// const ResumePDF = () => {
//   const { header } = useFormContext();
//   const { firstname, lastname, email, country, pincode, city } = header;

//   const resumeRef = useRef(); // Reference to resume section

//   // Dynamic Color & Font Selection
//   const [color, setColor] = useState("#2c3e50");
//   const [font, setFont] = useState("Arial");

//   const availableFonts = [
//     "Arial", "Times New Roman", "Courier New", "Verdana", "Roboto", "Montserrat"
//   ];

//   // Load selected font dynamically
//   useEffect(() => {
//     const fontLink = document.createElement("link");
//     fontLink.href = `https://fonts.googleapis.com/css2?family=${font.replace(" ", "+")}:wght@400;700&display=swap`;
//     fontLink.rel = "stylesheet";
//     document.head.appendChild(fontLink);
//   }, [font]);

//   // PDF Generation & Download
//   const handleDownloadPDF = async () => {
//     try {
//       const element = resumeRef.current;
//       if (!element) return;

//       // Small delay to allow UI updates
//       // await new Promise((resolve) => setTimeout(resolve, 500));

//       // Capture resume as image using html2canvas
//       const canvas = await html2canvas(element, {
//         scale: 2, // High resolution
//         useCORS: true, // Fix for images/fonts
//         logging: false, // Reduce console logs
//         foreignObjectRendering: true // Better text rendering
//       });

//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgData = canvas.toDataURL("image/png");
//       const imgWidth = 210 - 20; // A4 width - margins
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
//       pdf.save("resume.pdf");

//       console.log("PDF Downloaded Successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <Container>
//       <Grid container justifyContent="center">
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <div style={{ textAlign: "center", marginBottom: "20px" ,display:"flex"}}>
//             {/* Color & Font Selectors */}
//             <label>Choose Color: </label>
//             <input type="color"  value={color} onChange={(e) => setColor(e.target.value)} />

//             <label style={{ marginLeft: "20px" }}>Choose Font: </label>
//             <select value={font} onChange={(e) => setFont(e.target.value)}>
//               {availableFonts.map((f) => (
//                 <option key={f} value={f}>{f}</option>
//               ))}
//             </select>
//           </div>

//           {/* Resume Layout */}
//           <Card
//             ref={resumeRef}
//             style={{
//               minwidth: "100%",
//               maxWidth: "900px", // Limit max width for large screens
//               // backgroundColor: "#fff",
//               padding: "40px",
//               fontFamily: font,
//               lineHeight: "1.6",
//               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//               margin: "auto",
//               borderRadius: "8px",  
//               className:" shadow-lg  border-black"
//             }}
//           >
//             {/* Header Section */}
//             <div style={{ textAlign: "center", marginBottom: "20px" }}>
//               <h1 style={{ margin: "0", color: color }}>
//                 {firstname || "Your First Name"} {lastname || "Your Last Name"}
//               </h1>
//               <p style={{ fontSize: "14px", color: "#555" }}>
//                 {email || "your.email@example.com"} | {city || "City"}, {country || "Country"} | {pincode || "000000"}
//               </p>
//             </div>
//             <hr style={{ border: `1px solid ${color}`, margin: "20px 0" }} />
//           </Card>

//           {/* Download Button */}
//           <div style={{ textAlign: "center" }}>
//             <button
//               type="button"
//               onClick={handleDownloadPDF}
//               style={{
//                 marginTop: "20px",
//                 padding: "10px 15px",
//                 background: color,
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px"
//               }}
//             >
//               Download Resume as PDF
//             </button>
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ResumePDF;



// import React, { useState, useEffect, useRef } from "react";
// import { jsPDF } from "jspdf";

// const ResumePDF = () => {
//   // Resume Data
//   const [firstname, setFirstname] = useState("Your First Name");
//   const [lastname, setLastname] = useState("Your Last Name");
//   const [email, setEmail] = useState("your.email@example.com");
//   const [city, setCity] = useState("City");
//   const [country, setCountry] = useState("Country");
//   const [pincode, setPincode] = useState("000000");

//   // Color & Font Settings
//   const [color, setColor] = useState("#2c3e50");
//   const [font, setFont] = useState("Arial");

//   const availableFonts = [
//     "Arial", "Times New Roman", "Courier New", "Verdana", "Roboto", "Montserrat"
//   ];

//   const pdfRef = useRef(null);

//   useEffect(() => {
//     generatePDF();
//   }, [color, font]);

//   // Function to Generate PDF
//   const generatePDF = () => {
//     const pdf = new jsPDF();

//     pdf.setFont(font);
//     pdf.setTextColor(color);
//     pdf.setFontSize(18);
//     pdf.text("Resume", 80, 20);

//     pdf.setFontSize(14);
//     pdf.text(`Name: ${firstname} ${lastname}`, 20, 40);
//     pdf.text(`Email: ${email}`, 20, 50);
//     pdf.text(`Location: ${city}, ${country} - ${pincode}`, 20, 60);

//     const pdfBlob = pdf.output("blob");
//     const pdfUrl = URL.createObjectURL(pdfBlob);

//     if (pdfRef.current) {
//       pdfRef.current.src = pdfUrl;
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       {/* Color & Font Selection */}
//       <div style={{ marginBottom: "20px" }}>
//         <label>Choose Color: </label>
//         <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

//         <label style={{ marginLeft: "20px" }}>Choose Font: </label>
//         <select value={font} onChange={(e) => setFont(e.target.value)}>
//           {availableFonts.map((f) => (
//             <option key={f} value={f}>{f}</option>
//           ))}
//         </select>
//       </div>

//       {/* PDF Preview */}
//       <iframe ref={pdfRef} width="100%" height="500px" title="Resume Preview"></iframe>

//       {/* Download Button */}
//       <button
//         onClick={generatePDF}
//         style={{
//           marginTop: "20px",
//           padding: "10px 15px",
//           background: color,
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontSize: "16px"
//         }}
//       >
//         Update PDF
//       </button>
//     </div>
//   );
// };

// export default ResumePDF;



// import React, { useState, useEffect, useRef } from "react";
// import { jsPDF } from "jspdf";
// import { useFormContext } from "../StateMaintain/data_useState";

// const ResumePDF = () => {
//   // Resume Data

//   const { header } = useFormContext();
//   const { firstname, lastname, email, country, pincode, city } = header;

//   // Color & Font Settings
//   const [color, setColor] = useState("#2c3e50");
//   const [font, setFont] = useState("Arial");

//   const availableFonts = [
//     "Arial", "Times New Roman", "Courier New", "Verdana", "Roboto", "Montserrat"
//   ];

//   const pdfRef = useRef(null);
//   const downloadRef = useRef(null);

//   useEffect(() => {
//     generatePDF();
//   }, [color, font]);

//   // Function to Generate and Display PDF
//   const generatePDF = () => {
//     const pdf = new jsPDF();

//     pdf.setFont(font);
//     pdf.setTextColor(color);
//     pdf.setFontSize(18);
//     pdf.text("Resume", 80, 20);

//     pdf.setFontSize(14);
//     pdf.text(`Name: ${firstname} ${lastname}`, 20, 40);
//     pdf.text(`Email: ${email}`, 20, 50);
//     pdf.text(`Location: ${city}, ${country} - ${pincode}`, 20, 60);

//     const pdfBlob = pdf.output("blob");
//     const pdfUrl = URL.createObjectURL(pdfBlob);

//     if (pdfRef.current) {
//       pdfRef.current.src = pdfUrl;
//     }

//     if (downloadRef.current) {
//       downloadRef.current.href = pdfUrl;
//       downloadRef.current.download = "Resume.pdf";
//     }
//   };

//   // Function to Download PDF
//   const downloadPDF = () => {
//     if (downloadRef.current) {
//       downloadRef.current.click();
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       {/* Color & Font Selection */}
//       <div style={{ marginBottom: "20px" }}>
//         <label>Choose Color: </label>
//         <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

//         <label style={{ marginLeft: "20px" }}>Choose Font: </label>
//         <select value={font} onChange={(e) => setFont(e.target.value)}>
//           {availableFonts.map((f) => (
//             <option key={f} value={f}>{f}</option>
//           ))}
//         </select>
//       </div>

//       {/* PDF Preview */}
//       <iframe ref={pdfRef} width="100%" height="500px" title="Resume Preview"></iframe>

//       {/* Hidden Download Link */}
//       <a ref={downloadRef} style={{ display: "none" }}></a>

//       {/* Buttons */}
//       <div style={{ marginTop: "20px" }}>
//         {/* <button
//           onClick={generatePDF}
//           style={{
//             marginRight: "10px",
//             padding: "10px 15px",
//             background: "#3498db",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px"
//           }}
//         >
//           Update PDF
//         </button> */}

//         <button
//           onClick={downloadPDF}
//           style={{
//             padding: "10px 15px",
//             background: "#27ae60",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px"
//           }}
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumePDF;



// import React, { useState, useEffect, useRef } from "react";
// import { jsPDF } from "jspdf";
// import { useFormContext } from "../StateMaintain/data_useState";

// const ResumePDF = () => {
//   const { header, summary, skills, experience, education, languages } = useFormContext();
//   const { firstname, lastname, email, country, pincode, city, phone } = header;
//   const pdfRef = useRef(null);

//   useEffect(() => {
//     generatePDF();
//   }, []);

//   const generatePDF = () => {
//     const pdf = new jsPDF();
//     pdf.setFont("Times New Roman");

//     // Header
//     pdf.setFontSize(22);
//     pdf.text(`${firstname} ${lastname}`, 105, 20, { align: "center" });
//     pdf.setFontSize(12);
//     pdf.text(`${city}, ${country} - ${pincode} | ${phone} | ${email}`, 105, 30, { align: "center" });

//     pdf.setLineWidth(0.5);
//     pdf.line(20, 35, 190, 35);

//     // Summary
//     pdf.setFontSize(14);
//     pdf.text("Summary", 20, 45);
//     pdf.setFontSize(12);
//     pdf.text(summary, 20, 52, { maxWidth: 170 });

//     // Skills
//     pdf.setFontSize(14);
//     pdf.text("Skills", 20, 70);
//     pdf.setFontSize(12);
//     skills.forEach((skill, index) => {
//       pdf.text(`• ${skill}`, 20, 78 + index * 6);
//     });

//     // Experience
//     let expStartY = 90 + skills.length * 6;
//     pdf.setFontSize(14);
//     pdf.text("Experience", 20, expStartY);
//     pdf.setFontSize(12);
//     experience.forEach((exp, index) => {
//       pdf.text(exp.company, 20, expStartY + 10 + index * 20);
//       pdf.text(exp.role, 20, expStartY + 16 + index * 20);
//       pdf.text(exp.date, 160, expStartY + 16 + index * 20);
//       exp.details.forEach((detail, i) => {
//         pdf.text(`• ${detail}`, 25, expStartY + 22 + index * 20 + i * 6);
//       });
//     });

//     // Education
//     let eduStartY = expStartY + experience.length * 30;
//     pdf.setFontSize(14);
//     pdf.text("Education and Training", 20, eduStartY);
//     pdf.setFontSize(12);
//     pdf.text(education.institution, 20, eduStartY + 10);
//     pdf.text(education.degree, 20, eduStartY + 16);
//     pdf.text(education.year, 160, eduStartY + 16);

//     // Languages
//     let langStartY = eduStartY + 30;
//     pdf.setFontSize(14);
//     pdf.text("Languages", 20, langStartY);
//     pdf.setFontSize(12);
//     languages.forEach((lang, index) => {
//       pdf.text(`${lang.name}: ${lang.proficiency}`, 20, langStartY + 8 + index * 6);
//     });

//     const pdfBlob = pdf.output("blob");
//     const pdfUrl = URL.createObjectURL(pdfBlob);
//     if (pdfRef.current) {
//       pdfRef.current.src = pdfUrl;
//     }
//   };

//   return (
//     <div>
//       <iframe ref={pdfRef} width="100%" height="600px" />
//     </div>
//   );
// };

// export default ResumePDF;



import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import { useFormContext } from "../StateMaintain/data_useState";

const ResumePDF = () => {
  const { header, summary, skills, experience, education, languages } = useFormContext();
  const { firstname, lastname, email, country, pincode, city, phone } = header;
  const pdfRef = useRef(null);

  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.setFont("Times New Roman");

    // Header
    pdf.setFontSize(22);
    pdf.text(`${firstname} ${lastname}`, 105, 20, { align: "center" });
    pdf.setFontSize(12);
    pdf.text(`${city}, ${country} - ${pincode} | ${phone} | ${email}`, 105, 30, { align: "center" });
    pdf.setLineWidth(0.5);
    pdf.line(20, 35, 190, 35);

    // Summary
    pdf.setFontSize(14);
    pdf.text("Summary", 20, 45);
    pdf.setFontSize(12);
    pdf.text(summary, 20, 52, { maxWidth: 170 });

    // Skills
    pdf.setFontSize(14);
    pdf.text("Skills", 20, 70);
    pdf.setFontSize(12);
    skills.forEach((skill, index) => {
      pdf.text(`• ${skill}`, 20, 78 + index * 6);
    });

    // Experience
    let expStartY = 90 + skills.length * 6;
    pdf.setFontSize(14);
    pdf.text("Experience", 20, expStartY);
    pdf.setFontSize(12);
    experience.forEach((exp, index) => {
      let positionY = expStartY + 10 + index * 30;
      pdf.text(exp.company, 20, positionY);
      pdf.text(exp.role, 20, positionY + 6);
      pdf.text(exp.date, 160, positionY + 6);
      exp.details.forEach((detail, i) => {
        pdf.text(`• ${detail}`, 25, positionY + 12 + i * 6);
      });
    });

    // Education
    let eduStartY = expStartY + experience.length * 40;
    pdf.setFontSize(14);
    pdf.text("Education and Training", 20, eduStartY);
    pdf.setFontSize(12);
    pdf.text(education.institution, 20, eduStartY + 10);
    pdf.text(education.degree, 20, eduStartY + 16);
    pdf.text(education.year, 160, eduStartY + 16);

    // Languages
    let langStartY = eduStartY + 30;
    pdf.setFontSize(14);
    pdf.text("Languages", 20, langStartY);
    pdf.setFontSize(12);
    languages.forEach((lang, index) => {
      pdf.text(`${lang.name}: ${lang.proficiency}`, 20, langStartY + 8 + index * 6);
    });

    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    if (pdfRef.current) {
      pdfRef.current.src = pdfUrl;
    }
  };

  return (
    <div>
      <iframe ref={pdfRef} width="100%" height="600px" />
    </div>
  );
};

export default ResumePDF;
