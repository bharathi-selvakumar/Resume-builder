import React, { useState} from "react";
// import axios from 'axios';

import { motion } from 'framer-motion';
import {
    
    Box,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
   
    Grid,
    Paper,

} from '@mui/material';

export const Education = () => {



    const [school, setSchool] = useState({
        institutionName: '',
        batch: '',
        grade: '',
        activities: ''
    });

    const [college, setCollege] = useState({
        institutionName: '',
        degree: '',
        fieldOfStudy: '',
        batch: '',
        grade: '',
        activities: ''
    });

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


    return (
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
}