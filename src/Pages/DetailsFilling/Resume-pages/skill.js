import React, { useState } from "react";
import {
    Container, Paper, Typography, TextField, Button,
    Card, CardContent, IconButton, Grid, FormControl,
    InputLabel, Select, MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useFormContext } from "./StateMaintain/data_useState";

export const Skill = () => {
    const {skills, setSkills} = useFormContext();  // ✅ Store array in useState
    const [newSkill, setNewSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('Intermediate');

    const addSkill = () => {
        const normalizedSkillName = newSkill.trim().toLowerCase();

        if (normalizedSkillName && !skills.some(skill => skill.name.toLowerCase() === normalizedSkillName)) {
            setSkills((prevSkills) => [...prevSkills, { name: newSkill.trim(), level: skillLevel }]); // ✅ Updating array correctly
            setNewSkill('');
        }
    };

    const removeSkill = (skillName) => {
        setSkills((prevSkills) => prevSkills.filter((skill) => skill.name !== skillName)); // ✅ Removing skill correctly
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                    Professional Skills
                </Typography>

                {/* Skill Input Section */}
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Add a skill..."
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth>
                            <InputLabel>Level</InputLabel>
                            <Select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
                                <MenuItem value="Beginner">Beginner</MenuItem>
                                <MenuItem value="Intermediate">Intermediate</MenuItem>
                                <MenuItem value="Advanced">Advanced</MenuItem>
                                <MenuItem value="Expert">Expert</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={addSkill} startIcon={<AddIcon />}>
                            Add
                        </Button>
                    </Grid>
                </Grid>

                {/* Skills List */}
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Your Skills
                </Typography>
                <Grid container spacing={2}>
                    {skills.map((skill) => (
                        <Grid item xs={12} sm={6} key={skill.name}>
                            <Card variant="outlined">
                                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="subtitle1">{skill.name} ({skill.level})</Typography>
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
    );
};
