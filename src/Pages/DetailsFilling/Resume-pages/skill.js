import React, { useState } from "react";
// import axios from 'axios';
// import { motion } from 'framer-motion';
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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export const Skill = () => {

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('Intermediate');
    // const [error, setError] = useState(null);

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
    return (
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
                            <Select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} label="Level" >
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
    )
}