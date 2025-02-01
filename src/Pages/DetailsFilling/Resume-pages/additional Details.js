import React, { useState } from "react";
// import axios from 'axios';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Chip,
    Autocomplete
} from '@mui/material';


export const AdditionalDetails = () => {

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
    return (
        <>
            <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4, minWidth: "70%" }}>
                <Paper sx={{ padding: 3 }}>
                    <Typography variant="h5" fontWeight="bold">Additional Details</Typography>

                    {/* Languages */}
                    <Typography variant="h6" sx={{ mt: 3, }}>Languages</Typography>
                    <Autocomplete
                        sx={{ maxWidth: "900px" }}
                        multiple
                        options={['English', 'Spanish', 'French', 'German']}
                        value={languages}
                        onChange={(event, newValue) => setLanguages(newValue)}
                        renderInput={(params) => <TextField {...params} fullWidth label="Languages Known" />}
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
                                onChange={(e) => handleCertificationChange(index, 'certificationName', e.target.value)} />
                            <TextField
                                label="Issued By"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                value={cert.issuedBy}
                                onChange={(e) => handleCertificationChange(index, 'issuedBy', e.target.value)} />
                            <TextField
                                label="Date Earned"
                                type="date"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                value={cert.dateEarned}
                                onChange={(e) => handleCertificationChange(index, 'dateEarned', e.target.value)} />

                            {/* <Typography variant="h6"> {index + 1}</Typography> */}
                            {certifications.length > 1 && (
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleRemoveCertification(index)}
                                    sx={{ mt: 1 }}
                                >
                                    Remove Certification  {index + 1}
                                </Button>
                            )}</Box>

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
                        <Box key={index} sx={{}}>
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
                            {projects.length > 1 && (
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => handleRemoveProject(index)}
                                    sx={{ mt: 1 }}
                                >
                                    Remove Project  {index + 1}
                                </Button>
                            )}
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
        </>
    )
}