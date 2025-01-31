// import React, { useState, useCallback } from "react";
// import axios from 'axios';
// import { AddCircle, Delete } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import {
//   CheckCircle,
//   AlertCircle,
//   TrendingUp,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Edit,
// } from 'lucide-react';
// import {
//   LinearProgress,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,

// } from '@mui/material';
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   IconButton,
//   Grid,
//   Paper
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import { MuiStepper } from "../../MuiDesigns/stepperComponent";
// import { useStepper } from "../../MuiDesigns/useStepper";
// // import OpenAI from 'openai';
// // import { Sparkles } from 'lucide-react';
// import {

//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Alert,
//   CircularProgress,
//   Chip,
// } from '@mui/material';
// import {  Send as SendIcon, Close as CloseIcon } from '@mui/icons-material';
// import { debounce } from 'lodash';

// export const ResumeDataFilling = () => {
//   const [values, setValues] = useState({
//     firstname: "",
//     lastname: "",
//     city: "",
//     country: "",
//     pincode: "",
//     email: "",
//     experience: "",
//   });

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(email);
//   };
//   const validatePinCode = (pinCode) => {
//     const pinCodeRegex = /^[0-9]{6}$/;
//     return pinCodeRegex.test(pinCode);
//   };

//   const [errors, setErrors] = useState({
//     firstname: "",
//     lastname: "",
//     pincode: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [id]: value,
//     }));

//     if (id === "email") {
//       const isValidEmail = validateEmail(value);
//       setErrors((prev) => ({
//         ...prev,
//         email: isValidEmail ? "" : "Invalid email address",
//       }));
//     }

//     if (id === "pincode") {
//       const isValidPinCode = validatePinCode(value);
//       setErrors((prev) => ({
//         ...prev,
//         pincode: isValidPinCode ? "" : "Pin Code must be exactly 6 digits",
//       }));
//     }
//   };


//   const textFieldConfigs = [
//     {
//       id: "firstname", label: "First Name", variant: "filled", placeholder: "(Eg:Jack)", sx: {
//         m: 1, width: { lg: "22.5rem", md: "22.5rem", xs: "100%", sm: "100%" },
//         height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       },
//     },
//     {
//       id: "lastname", label: "Last Name", variant: "filled", placeholder: "(Eg:Thompson)", sx: {
//         m: 1, width: { lg: "20rem", md: "20rem", xs: "100%", sm: "100%" },
//         height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       },
//     },
//     {
//       id: "city", label: "City", variant: "filled", sx: {
//         m: 1, width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       },
//     },
//     {
//       id: "country", label: "Country", variant: "filled", sx: {
//         m: 1, width: { lg: "13.5rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       }
//     },
//     {
//       id: "pincode", label: "Pin Code", variant: "filled", sx: {
//         width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" },
//         m: 1, height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       },

//     },
//     {
//       id: "email", label: "Email ID ", variant: "filled", placeholder: "(Eg:JackThompson@gmail.com)", sx: {
//         m: 1, width: "97%", height: "3.0rem",
//         '& .MuiInputBase-root': {
//           height: "3.0rem",
//         }
//       }
//     },

//   ];

//   const renderTextFields = () => {

//     return textFieldConfigs.map((config) => (
//       <TextField
//         key={config.id}
//         id={config.id}
//         label={config.label}
//         variant={config.variant}
//         value={values[config.id]}
//         onChange={handleChange}
//         sx={{
//           ...config.sx, transition: "transform 0.3s ease-in-out",
//           '&:hover': {
//             transform: 'scale(1.05)',
//           }
//         }}
//         placeholder={config.placeholder}
//         error={!!errors[config.id]}
//         helperText={errors[config.id]}
//       />
//     ));
//   };

//   const { activeStep, handleNext, handleBack, isBackDisabled, isNextDisabled } = useStepper();

//   const renderPersonalDetails = () => (
//     <>
//       <Box>
//         <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}>
//         Let’s start with your header</Typography>
//         <Typography  sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}> Include your full name and at least one way for employers to reach you.</Typography>

//         <Box component="form"
//           display="flex"
//           flexWrap="wrap"
//           maxWidth="716px"
//           noValidate
//           autoComplete="off"
//           justifyContent="center"
//         >

//           {renderTextFields()}
//         </Box>
//       </Box>
//     </>
//   );


//   const [experiences, setExperiences] = useState([{
//     company: '',
//     position: '',
//     startDate: '',
//     endDate: '',
//     description: ''
//   }]);

//   const handleAddExperience = () => {
//     setExperiences([...experiences, {
//       company: '',
//       position: '',
//       startDate: '',
//       endDate: '',
//       description: ''
//     }]);
//   };

//   const handleRemoveExperience = (index) => {
//     const newExperiences = experiences.filter((_, i) => i !== index);
//     setExperiences(newExperiences);
//   };

//   const handleExperienceChange = (index, field, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index][field] = value;
//     setExperiences(newExperiences);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Experiences:', experiences);
//     // Here you can handle the submission of experiences data
//   };


//   const renderExperience = () => (
//     <>

//       <Box sx={{ maxWidth: 800, padding: 3 }}>
//         <Paper elevation={3} sx={{ padding: 3 }}>
//           <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>Experience Details
//           </Typography>

//           {experiences.map((exp, index) => (
//             <Card key={index} >
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: "20px" }}>
//                 <Typography variant="h6">Experience {index + 1}</Typography>
//                 {experiences.length > 1 && (
//                   <IconButton
//                     onClick={() => handleRemoveExperience(index)}
//                     color="error"
//                     size="small"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 )}
//               </Box>
//               <Grid container spacing={3} padding="20px">

//                 <Grid item xs={12} sm={6} >
//                   <TextField
//                     fullWidth
//                     label="Company"
//                     value={exp.company}
//                     onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="Position"
//                     value={exp.position}
//                     onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     type="date"
//                     label="Start Date"
//                     value={exp.startDate}
//                     onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
//                     required
//                     InputLabelProps={{ shrink: true }}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     type="date"
//                     label="End Date"
//                     value={exp.endDate}
//                     onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
//                     InputLabelProps={{ shrink: true }}
//                     fullWidth
//                   />


//                 </Grid>
//                 <Grid item xs={12} sm={6} maxWidth="700px" lg={12} >
//                   <TextField
//                     fullWidth
//                     label="Description"
//                     value={exp.description}
//                     onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
//                     multiline
//                     rows={4}
//                     required
//                   />
//                 </Grid>
//               </Grid>

//             </Card>
//           ))}
//           <Button
//             startIcon={<AddIcon />}
//             onClick={handleAddExperience}
//             variant="outlined"
//             sx={{ mb: 3, mt: "20px" }}
//           >
//             Add Another Experience
//           </Button>

//         </Paper>
//       </Box>
//     </>
//   );


//   const [school, setSchool] = useState({
//     institutionName: '',
//     batch: '',
//     grade: '',
//     activities: ''
//   });

//   const [college, setCollege] = useState({
//     institutionName: '',
//     degree: '',
//     fieldOfStudy: '',
//     batch: '',
//     grade: '',
//     activities: ''
//   });

//   // Handle input change for school and college
//   const handleInputChange = (e, type) => {
//     const { name, value } = e.target;
//     if (type === 'school') {
//       setSchool((prevState) => ({ ...prevState, [name]: value }));
//     } else if (type === 'college') {
//       setCollege((prevState) => ({ ...prevState, [name]: value }));
//     }
//   };

//   const handleSubmitedu = () => {
//     alert('Education details saved successfully!');
//     console.log(school, college); // Replace with actual submission logic
//   };


//   const renderEducation = () => (
//     <>
//   <Box sx={{ maxWidth: 900, margin: '0 auto', py: 4 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 4 }}>
//           Education Details
//         </Typography>

//         {/* School Section */}
//         <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//           <Typography variant="h5" sx={{ mb: 3 }}>School Details</Typography>

//           <Card sx={{ marginBottom: 3 }}>
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="School Name"
//                     name="institutionName"
//                     value={school.institutionName}
//                     onChange={(e) => handleInputChange(e, 'school')}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Year of Passing"
//                     name="batch"
//                     value={school.batch}
//                     onChange={(e) => handleInputChange(e, 'school')}
//                     required
//                     type="number"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Percentage"
//                     name="grade"
//                     value={school.grade}
//                     onChange={(e) => handleInputChange(e, 'school')}
//                     required
//                     type="number"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Extracurricular Activities"
//                     name="activities"
//                     value={school.activities}
//                     onChange={(e) => handleInputChange(e, 'school')}
//                     required
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* College Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Typography variant="h5" sx={{ mb: 3 }}>College Details</Typography>

//           <Card sx={{ marginBottom: 3 }}>
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="College Name"
//                     name="institutionName"
//                     value={college.institutionName}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Degree"
//                     name="degree"
//                     value={college.degree}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Field of Study"
//                     name="fieldOfStudy"
//                     value={college.fieldOfStudy}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Year of Passing"
//                     name="batch"
//                     value={college.batch}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                     type="number"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="CGPA"
//                     name="grade"
//                     value={college.grade}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                     type="number"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     label="Extracurricular Activities"
//                     name="activities"
//                     value={college.activities}
//                     onChange={(e) => handleInputChange(e, 'college')}
//                     required
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Submit Button */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Button variant="contained" color="primary" onClick={handleSubmitedu}>
//               Save Details
//             </Button>
//           </motion.div>
//         </Box>
//       </Paper>
//     </Box>
//     </>
//   )


//   // Initialize OpenAI client
//   // const openai = new OpenAI({
//   //   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   //   dangerouslyAllowBrowser: true
//   // });
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState('');
//   const [skillLevel, setSkillLevel] = useState('Intermediate');
//   const [error, setError] = useState(null);

//   const addSkill = (skillName) => {
//     const normalizedSkillName = skillName.trim().toLowerCase();
//     if (
//       normalizedSkillName &&
//       !skills.some((skill) => skill.name.toLowerCase() === normalizedSkillName)
//     ) {
//       setSkills([...skills, { name: skillName.trim(), level: skillLevel }]);
//       setNewSkill('');
//     }
//   };

//   const removeSkill = (skillName) => {
//     setSkills(skills.filter((skill) => skill.name !== skillName));
//   };


//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && newSkill.trim()) {
//       addSkill(newSkill);
//     }
//   };
//   const renderskill = () => (
//     <>

//         <Container maxWidth="md">
//           <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//             <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
//               Professional Skills
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//               Add your skills
//             </Typography>

//             {/* Skill Input Section */}
//             <Box sx={{ mb: 4 }}>
//               <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//                 <TextField
//                   fullWidth
//                   value={newSkill}
//                   onKeyDown={handleKeyDown} 
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   placeholder="Add a skill..."
//                   variant="outlined"
//                   size="medium"
//                 />
//                 <FormControl sx={{ minWidth: 150 }}>
//                   <InputLabel>Level</InputLabel>
//                   <Select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} label="Level">
//                     <MenuItem value="Beginner">Beginner</MenuItem>
//                     <MenuItem value="Intermediate">Intermediate</MenuItem>
//                     <MenuItem value="Advanced">Advanced</MenuItem>
//                     <MenuItem value="Expert">Expert</MenuItem>
//                   </Select>
//                 </FormControl>
//                 <Button variant="contained" onClick={() => addSkill(newSkill)} startIcon={<AddIcon />}>
//                   Add
//                 </Button>
//               </Box>
//             </Box>

//             {/* Skills List */}
//             <Typography variant="h6" gutterBottom>
//               Your Skills
//             </Typography>
//             <Grid container spacing={2}>
//               {skills.map((skill) => (
//                 <Grid item xs={12} sm={6} key={skill.name}>
//                   <Card variant="outlined">
//                     <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <Box>
//                         <Typography variant="subtitle1">{skill.name}</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {skill.level}
//                         </Typography>
//                       </Box>
//                       <IconButton onClick={() => removeSkill(skill.name)} size="small" color="error">
//                         <CloseIcon />
//                       </IconButton>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Paper>
//         </Container>
//     </>
//   );
//   const resumeStats = {
//     completionScore: 85,
//     strengths: [
//       'Strong professional experience section',
//       'Well-structured education history',
//       'Clear skill descriptions',
//     ],
//     improvements: [
//       'Add more quantifiable achievements',
//       'Include relevant certifications',
//       'Expand on project details',
//     ],
//     experience: 4,
//     education: 2,
//     skills: 12,
//   };

//   const renderSummaryPage=()=> (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
//         Resume Analysis Summary
//       </Typography>

//       {/* Overall Score */}
//       <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Overall Completion Score
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//           <Box sx={{ width: '100%', mr: 1 }}>
//             <LinearProgress 
//               variant="determinate" 
//               value={resumeStats.completionScore} 
//               sx={{ height: 10, borderRadius: 5 }}
//             />
//           </Box>
//           <Box sx={{ minWidth: 35 }}>
//             <Typography variant="body2" color="text.secondary">
//               {`${resumeStats.completionScore}%`}
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>

//       <Grid container spacing={4}>
//         {/* Key Metrics */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Key Metrics
//               </Typography>
//               <List>
//                 <ListItem>
//                   <ListItemIcon>
//                     <Briefcase size={24} />
//                   </ListItemIcon>
//                   <ListItemText 
//                     primary={`${resumeStats.experience} Years Experience`}
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon>
//                     <GraduationCap size={24} />
//                   </ListItemIcon>
//                   <ListItemText 
//                     primary={`${resumeStats.education} Degrees`}
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon>
//                     <Award size={24} />
//                   </ListItemIcon>
//                   <ListItemText 
//                     primary={`${resumeStats.skills} Skills Listed`}
//                   />
//                 </ListItem>
//               </List>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Strengths */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
//                 <CheckCircle size={24} style={{ marginRight: '8px', color: '#4caf50' }} />
//                 Strengths
//               </Typography>
//               <List>
//                 {resumeStats.strengths.map((strength, index) => (
//                   <ListItem key={index}>
//                     <ListItemText primary={strength} />
//                   </ListItem>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Areas for Improvement */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
//                 <TrendingUp size={24} style={{ marginRight: '8px', color: '#ff9800' }} />
//                 Areas for Improvement
//               </Typography>
//               <List>
//                 {resumeStats.improvements.map((improvement, index) => (
//                   <ListItem key={index}>
//                     <ListItemText primary={improvement} />
//                   </ListItem>
//                 ))}
//               </List>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Tips Section */}
//       <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Optimization Tips
//         </Typography>
//         <List>
//           <ListItem>
//             <ListItemIcon>
//               <AlertCircle size={24} style={{ color: '#2196f3' }} />
//             </ListItemIcon>
//             <ListItemText 
//               primary="Use action verbs to start your experience bullet points"
//               secondary="Examples: Developed, Implemented, Led, Managed"
//             />
//           </ListItem>
//           <Divider component="li" />
//           <ListItem>
//             <ListItemIcon>
//               <AlertCircle size={24} style={{ color: '#2196f3' }} />
//             </ListItemIcon>
//             <ListItemText 
//               primary="Include metrics and achievements"
//               secondary="Add numbers and percentages to quantify your impact"
//             />
//           </ListItem>
//           <Divider component="li" />
//           <ListItem>
//             <ListItemIcon>
//               <AlertCircle size={24} style={{ color: '#2196f3' }} />
//             </ListItemIcon>
//             <ListItemText 
//               primary="Tailor your resume to the job"
//               secondary="Match your skills and experience to the job requirements"
//             />
//           </ListItem>
//         </List>
//       </Paper>

//       {/* Action Section */}
//       <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Next Steps
//         </Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Edit size={24} style={{ marginRight: '8px', color: '#4caf50' }} />
//             <Typography variant="body1">Review and edit your resume</Typography>
//           </Box>
//           <IconButton color="primary" sx={{ ml: 2 }} onClick={() => alert('Edit resume')}>
//             <Edit size={20} />
//           </IconButton>
//         </Box>
//       </Paper>
//     </Container>
//   );

//   const renderStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return renderPersonalDetails();
//       case 1:
//         return renderExperience();
//       case 2:
//         return renderEducation();
//       case 3:
//         return renderskill();
//       case 4:
//         return renderSummaryPage();
//       default:
//         return;
//     }
//   };

//   return (
//     <Container>
//       <Box >
//         <MuiStepper
//           activeStep={activeStep}
//           handleNext={handleNext}
//           handleBack={handleBack}

//         />
//         <Box>
//           <Card
//             className="shadow-lg mb-3 p-3"
//             sx={{ height: "auto", display: "flex", flexDirection: "column", mt: 2 }}
//           >
//             <Box
//               component="form"
//               display="flex"
//               flexWrap="wrap"
//               noValidate
//               autoComplete="off"
//               justifyContent="center"
//             >
//               {renderStepContent()}
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
//               <Button
//                 variant="contained"
//                 onClick={handleBack}
//                 disabled={isBackDisabled}
//                 sx={{
//                   background: "linear-gradient(to right,rgb(85, 117, 221),rgb(58, 149, 214),rgb(84, 192, 222))", transition: "transform 0.3s ease-in-out",
//                   "&:hover": {
//                     background: "linear-gradient(to right,rgb(85, 200, 223),rgb(58, 175, 214),rgb(85, 117, 221))", transform: 'scale(1.05)'
//                   },
//                   width: "8rem"
//                 }}

//               >
//                 Back
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleNext}
//                 disabled={isNextDisabled}
//                 sx={{
//                   background: "linear-gradient(to right,rgb(85, 117, 221),rgb(58, 149, 214),rgb(84, 192, 222))", transition: "transform 0.3s ease-in-out",
//                   "&:hover": {
//                     background: "linear-gradient(to right,rgb(85, 200, 223),rgb(58, 175, 214),rgb(85, 117, 221))", transform: 'scale(1.05)'
//                   },
//                   width: "8rem"
//                 }}
//               >
//                 Next
//               </Button>
//             </Box>
//           </Card>
//         </Box>
//       </Box>
//     </Container>
//   );
// };




import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { AddCircle, Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Edit,
} from 'lucide-react';
import {
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,

} from '@mui/material';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Grid,
  Paper,
  Autocomplete
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { MuiStepper } from "../../MuiDesigns/stepperComponent";
import { useStepper } from "../../MuiDesigns/useStepper";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Chip,
} from '@mui/material';
import { Send as SendIcon, Close as CloseIcon } from '@mui/icons-material';
import { debounce } from 'lodash';

export const ResumeDataFilling = () => {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem('resumeValues');
    return savedValues ? JSON.parse(savedValues) : {
      firstname: "",
      lastname: "",
      city: "",
      country: "",
      pincode: "",
      email: "",
      experience: "",
    };
  });

  const [experiences, setExperiences] = useState(() => {
    const savedExperiences = localStorage.getItem('resumeExperiences');
    return savedExperiences ? JSON.parse(savedExperiences) : [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }];
  });

  const [school, setSchool] = useState(() => {
    const savedSchool = localStorage.getItem('resumeSchool');
    return savedSchool ? JSON.parse(savedSchool) : {
      institutionName: '',
      batch: '',
      grade: '',
      activities: ''
    };
  });

  const [college, setCollege] = useState(() => {
    const savedCollege = localStorage.getItem('resumeCollege');
    return savedCollege ? JSON.parse(savedCollege) : {
      institutionName: '',
      degree: '',
      fieldOfStudy: '',
      batch: '',
      grade: '',
      activities: ''
    };
  });

  const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem('resumeSkills');
    return savedSkills ? JSON.parse(savedSkills) : [];
  });

  useEffect(() => {
    localStorage.setItem('resumeValues', JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    localStorage.setItem('resumeExperiences', JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem('resumeSchool', JSON.stringify(school));
  }, [school]);

  useEffect(() => {
    localStorage.setItem('resumeCollege', JSON.stringify(college));
  }, [college]);

  useEffect(() => {
    localStorage.setItem('resumeSkills', JSON.stringify(skills));
  }, [skills]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const validatePinCode = (pinCode) => {
    const pinCodeRegex = /^[0-9]{6}$/;
    return pinCodeRegex.test(pinCode);
  };

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    pincode: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "email") {
      const isValidEmail = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: isValidEmail ? "" : "Invalid email address",
      }));
    }

    if (id === "pincode") {
      const isValidPinCode = validatePinCode(value);
      setErrors((prev) => ({
        ...prev,
        pincode: isValidPinCode ? "" : "Pin Code must be exactly 6 digits",
      }));
    }
  };

  const textFieldConfigs = [
    {
      id: "firstname", label: "First Name", variant: "filled", placeholder: "(Eg:Jack)", sx: {
        m: 1, width: { lg: "22.5rem", md: "22.5rem", xs: "100%", sm: "100%" },
        height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      },
    },
    {
      id: "lastname", label: "Last Name", variant: "filled", placeholder: "(Eg:Thompson)", sx: {
        m: 1, width: { lg: "20rem", md: "20rem", xs: "100%", sm: "100%" },
        height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      },
    },
    {
      id: "city", label: "City", variant: "filled", sx: {
        m: 1, width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      },
    },
    {
      id: "country", label: "Country", variant: "filled", sx: {
        m: 1, width: { lg: "13.5rem", md: "10rem", xs: "100%", sm: "100%" }, height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      }
    },
    {
      id: "pincode", label: "Pin Code", variant: "filled", sx: {
        width: { lg: "14rem", md: "10rem", xs: "100%", sm: "100%" },
        m: 1, height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      },

    },
    {
      id: "email", label: "Email ID ", variant: "filled", placeholder: "(Eg:JackThompson@gmail.com)", sx: {
        m: 1, width: "97%", height: "3.0rem",
        '& .MuiInputBase-root': {
          height: "3.0rem",
        }
      }
    },

  ];

  const renderTextFields = () => {
    return textFieldConfigs.map((config) => (
      <TextField
        key={config.id}
        id={config.id}
        label={config.label}
        variant={config.variant}
        value={values[config.id]}
        onChange={handleChange}
        sx={{
          ...config.sx, transition: "transform 0.3s ease-in-out",
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
        placeholder={config.placeholder}
        error={!!errors[config.id]}
        helperText={errors[config.id]}
      />
    ));
  };

  const { activeStep, handleNext, handleBack, isBackDisabled, isNextDisabled } = useStepper();

  const renderPersonalDetails = () => (
    <>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}>
          Let’s start with your header</Typography>
        <Typography sx={{ fontWeight: "bold", marginBottom: "10px", ml: "10px" }}> Include your full name and at least one way for employers to reach you.</Typography>

        <Box component="form"
          display="flex"
          flexWrap="wrap"
          maxWidth="716px"
          noValidate
          autoComplete="off"
          justifyContent="center"
        >

          {renderTextFields()}
        </Box>
      </Box>
    </>
  );

  const handleAddExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Experiences:', experiences);
    // Here you can handle the submission of experiences data
  };

  const renderExperience = () => (
    <>
      <Box sx={{ maxWidth: 800, padding: 3 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>Experience Details
          </Typography>

          {experiences.map((exp, index) => (
            <Card key={index} >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: "20px" }}>
                <Typography variant="h6">Experience {index + 1}</Typography>
                {experiences.length > 1 && (
                  <IconButton
                    onClick={() => handleRemoveExperience(index)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
              <Grid container spacing={3} padding="20px">

                <Grid item xs={12} sm={6} >
                  <TextField
                    fullWidth
                    label="Company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Position"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="date"
                    label="Start Date"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                    required
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="date"
                    label="End Date"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />

                </Grid>
                <Grid item xs={12} sm={6} maxWidth="700px" lg={12} >
                  <TextField
                    fullWidth
                    label="Description"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
              </Grid>

            </Card>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={handleAddExperience}
            variant="outlined"
            sx={{ mb: 3, mt: "20px" }}
          >
            Add Another Experience
          </Button>

        </Paper>
      </Box>
    </>
  );

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'school') {
      setSchool((prevState) => ({ ...prevState, [name]: value }));
    } else if (type === 'college') {
      setCollege((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmitedu = () => {
    alert('Education details saved successfully!');
    console.log(school, college); // Replace with actual submission logic
  };

  const renderEducation = () => (
    <>
      <Box sx={{ maxWidth: 900, margin: '0 auto', py: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 4 }}>
            Education Details
          </Typography>

          {/* School Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>School Details</Typography>

            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="School Name"
                      name="institutionName"
                      value={school.institutionName}
                      onChange={(e) => handleInputChange(e, 'school')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Year of Passing"
                      name="batch"
                      value={school.batch}
                      onChange={(e) => handleInputChange(e, 'school')}
                      required
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Percentage"
                      name="grade"
                      value={school.grade}
                      onChange={(e) => handleInputChange(e, 'school')}
                      required
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Extracurricular Activities"
                      name="activities"
                      value={school.activities}
                      onChange={(e) => handleInputChange(e, 'school')}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          {/* College Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>College Details</Typography>

            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="College Name"
                      name="institutionName"
                      value={college.institutionName}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Degree"
                      name="degree"
                      value={college.degree}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Field of Study"
                      name="fieldOfStudy"
                      value={college.fieldOfStudy}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Year of Passing"
                      name="batch"
                      value={college.batch}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="CGPA"
                      name="grade"
                      value={college.grade}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Extracurricular Activities"
                      name="activities"
                      value={college.activities}
                      onChange={(e) => handleInputChange(e, 'college')}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button variant="contained" color="primary" onClick={handleSubmitedu}>
                Save Details
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </Box>
    </>
  )

  const [newSkill, setNewSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState('Intermediate');
  const [error, setError] = useState(null);

  const addSkill = (skillName) => {
    const normalizedSkillName = skillName.trim().toLowerCase();
    if (
      normalizedSkillName &&
      !skills.some((skill) => skill.name.toLowerCase() === normalizedSkillName)
    ) {
      setSkills([...skills, { name: skillName.trim(), level: skillLevel }]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillName) => {
    setSkills(skills.filter((skill) => skill.name !== skillName));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      addSkill(newSkill);
    }
  };

  const renderskill = () => (
    <>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
            Professional Skills
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Add your skills
          </Typography>

          {/* Skill Input Section */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                value={newSkill}
                onKeyDown={handleKeyDown}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add a skill..."
                variant="outlined"
                size="medium"
              />
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Level</InputLabel>
                <Select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} label="Level">
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={() => addSkill(newSkill)} startIcon={<AddIcon />}>
                Add
              </Button>
            </Box>
          </Box>

          {/* Skills List */}
          <Typography variant="h6" gutterBottom>
            Your Skills
          </Typography>
          <Grid container spacing={2}>
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} key={skill.name}>
                <Card variant="outlined">
                  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="subtitle1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}
                      </Typography>
                    </Box>
                    <IconButton onClick={() => removeSkill(skill.name)} size="small" color="error">
                      <CloseIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );

  const resumeStats = {
    completionScore: 85,
    strengths: [
      'Strong professional experience section',
      'Well-structured education history',
      'Clear skill descriptions',
    ],
    improvements: [
      'Add more quantifiable achievements',
      'Include relevant certifications',
      'Expand on project details',
    ],
    experience: 4,
    education: 2,
    skills: 12,
  };


  const [summary, setSummary] = useState("");

  const renderSummaryPage = () => (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        component={Paper}
        elevation={3}
        sx={{ p: 4, maxWidth: 600, mx: "auto", mt: 5 }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Write Your Summary
        </Typography>

        {/* Summary Input Field */}
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Write a brief summary about yourself..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          inputProps={{ maxLength: 300 }}
        />

        {/* Character Count */}
        <Typography variant="body2" color="gray" mt={1}>
          {summary.length} / 300 characters
        </Typography>
      </Box>
    </Container>
  );


  const [languages, setLanguages] = useState([]);
  const [certifications, setCertifications] = useState([{ name: "", issuedBy: "", date: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "" }]);
  const [otherInfo, setOtherInfo] = useState("");

  const handleAddCertification = () => {
    // Logic to add certification
    setCertifications([
      ...certifications,
      { name: "", issuedBy: "", date: "" }
    ]);
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  // Handle removing a certification
  const handleRemoveCertification = (index) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
  };
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { projectName: '', description: '', technologies: '', projectLink: '' },
    ]);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };


  // Handle removing a project
  const handleRemoveProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };
  const AdditionalDetailsPage = () => (


    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" fontWeight="bold">Additional Details</Typography>

        {/* Languages */}
        <Typography variant="h6" sx={{ mt: 3 }}>Languages</Typography>
        <Autocomplete
          multiple
          options={['English', 'Spanish', 'French', 'German']}
          value={languages}
          onChange={(event, newValue) => setLanguages(newValue)}
          renderInput={(params) => <TextField {...params} label="Languages Known" />}
        />
        <Box sx={{ mt: 2 }}>
          {languages.map((language) => (
            <Chip key={language} label={language} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
            Certifications
          </Typography>
        {certifications.map((cert, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <TextField
              label="Certification Name"
              fullWidth
              variant="outlined"
              margin="normal"
              value={cert.certificationName}
              onChange={(e) => handleCertificationChange(index, 'certificationName', e.target.value)}
            />
            <TextField
              label="Issued By"
              fullWidth
              variant="outlined"
              margin="normal"
              value={cert.issuedBy}
              onChange={(e) => handleCertificationChange(index, 'issuedBy', e.target.value)}
            />
            <TextField
              label="Date Earned"
              type="date"
              fullWidth
              variant="outlined"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={cert.dateEarned}
              onChange={(e) => handleCertificationChange(index, 'dateEarned', e.target.value)}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveCertification(index)}
              sx={{ mt: 1 }}
            >
              Remove Certification  {index + 1}
            </Button>
          </Box>
        ))}
        <Button
          onClick={handleAddCertification}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add Certification
        </Button>

        
        <Typography variant="h5" fontWeight="bold" gutterBottom>
            Projects
          </Typography>
        {projects.map((project, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Project Name"
              fullWidth
              variant="outlined"
              margin="normal"
              value={project.projectName}
              onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
            />
            <TextField
              label="Description"
              fullWidth
              variant="outlined"
              margin="normal"
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              multiline
              rows={4}
            />
            <TextField
              label="Technologies Used"
              fullWidth
              variant="outlined"
              margin="normal"
              value={project.technologies}
              onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
            />
            <TextField
              label="Project Link"
              fullWidth
              variant="outlined"
              margin="normal"
              value={project.projectLink}
              onChange={(e) => handleProjectChange(index, 'projectLink', e.target.value)}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveProject(index)}
              sx={{ mt: 1 }}
            >
              Remove Project  {index + 1}
            </Button>
          </Box>
        ))}

        <Button
          onClick={handleAddProject}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Add Project
        </Button>
        {/* Other Information */}
        <Typography variant="h6" sx={{ mt: 3 }}>Other Information</Typography>
        <TextField
          label="Other Information"
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={otherInfo}
          onChange={(e) => setOtherInfo(e.target.value)}
        />

        {/* Submit Button */}
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" fullWidth>
            Save Additional Details
          </Button>
        </Box>
      </Paper>
    </Box>
  );


  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return renderPersonalDetails();
      case 1:
        return renderExperience();
      case 2:
        return renderEducation();
      case 3:
        return renderskill();
      case 4:
        return renderSummaryPage();
      case 5:
        return AdditionalDetailsPage();
      default:
        return;
    }
  };

  return (
    <Container>
      <Box >
        <MuiStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
        <Box>
          <Card
            className="shadow-lg mb-3 p-3"
            sx={{ height: "auto", display: "flex", flexDirection: "column", mt: 2 }}
          >
            <Box
              component="form"
              display="flex"
              flexWrap="wrap"
              noValidate
              autoComplete="off"
              justifyContent="center"
            >
              {renderStepContent()}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button
                variant="contained"
                onClick={handleBack}
                disabled={isBackDisabled}
                sx={{
                  background: "linear-gradient(to right,rgb(85, 117, 221),rgb(58, 149, 214),rgb(84, 192, 222))", transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(to right,rgb(85, 200, 223),rgb(58, 175, 214),rgb(85, 117, 221))", transform: 'scale(1.05)'
                  },
                  width: "8rem"
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={isNextDisabled}
                sx={{
                  background: "linear-gradient(to right,rgb(85, 117, 221),rgb(58, 149, 214),rgb(84, 192, 222))", transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(to right,rgb(85, 200, 223),rgb(58, 175, 214),rgb(85, 117, 221))", transform: 'scale(1.05)'
                  },
                  width: "8rem"
                }}
              >
                Next
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};
