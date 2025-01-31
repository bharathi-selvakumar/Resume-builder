// import { jsPDF } from "jspdf";

// const generateResumePDF = () => {
//   const pdf = new jsPDF();

//   // Set font for the entire PDF
//   pdf.setFont("helvetica");

//   // Title
//   pdf.setFontSize(20);
//   pdf.text("Diya Agarwal", 10, 10);
//   pdf.setFontSize(12);
//   pdf.text("New Delhi, India 110034", 10, 15);
//   pdf.text("+91 11 5555 3345", 10, 20);
//   pdf.text("d.agarwal@sample.in", 10, 25);

//   // Summary Section
//   pdf.setFontSize(14);
//   pdf.text("Summary", 10, 35);
//   pdf.setFontSize(12);
//   const summary = "Customer-focused Retail Sales professional with solid understanding of retail dynamics, marketing and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer needs and exceed expectations. Demonstrated record of exceeding revenue targets by leveraging communication skills and sales expertise.";
//   pdf.text(summary, 10, 40, { maxWidth: 180 });

//   // Skills Section
//   pdf.setFontSize(14);
//   pdf.text("Skills", 10, 80);
//   pdf.setFontSize(12);
//   const skills = [
//     "Cash register operation",
//     "POS system operation",
//     "Sales expertise",
//     "Teamwork",
//     "Inventory management",
//     "Accurate money handling",
//     "Documentation and recordkeeping",
//     "Retail merchandising expertise",
//   ];
//   skills.forEach((skill, index) => {
//     pdf.text(`• ${skill}`, 10, 90 + index * 5);
//   });

//   // Experience Section
//   pdf.setFontSize(14);
//   pdf.text("Experience", 10, 140);
//   pdf.setFontSize(12);
//   pdf.text("ZARA", 10, 150);
//   pdf.text("Retail Sales Associate", 10, 155);
//   pdf.text("New Delhi, India", 10, 160);
//   pdf.text("February 2017 to Current", 10, 165);
//   const zaraExperience = [
//     "Increased monthly sales 10% by effectively upselling and cross-selling products.",
//     "Prevented store losses by leveraging awareness, attention to detail, and integrity.",
//     "Processed payments and maintained accurate drawers to meet financial targets.",
//   ];
//   zaraExperience.forEach((task, index) => {
//     pdf.text(`• ${task}`, 10, 175 + index * 5);
//   });

//   // Education Section
//   pdf.setFontSize(14);
//   pdf.text("Education and Training", 10, 220);
//   pdf.setFontSize(12);
//   pdf.text("Oxford Software Institute & Oxford School of English", 10, 230);
//   pdf.text("Diploma in Financial Accounting", 10, 235);
//   pdf.text("New Delhi, India", 10, 240);
//   pdf.text("2016", 10, 245);

//   // Languages Section
//   pdf.setFontSize(14);
//   pdf.text("Languages", 10, 270);
//   pdf.setFontSize(12);
//   pdf.text("Hindi: Native speaker", 10, 280);
//   pdf.text("English: C2", 10, 285);
//   pdf.text("Bengali: B2", 10, 290);

//   // Output the PDF
//   pdf.save("resume.pdf");
// };

// // Call the function to generate the PDF
// generateResumePDF();
