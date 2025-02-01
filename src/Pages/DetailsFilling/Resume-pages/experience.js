import React, { useState } from "react";
// import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const Experience=()=>{
  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  }]);
    
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Experiences:', experiences);
//     // Here you can handle the submission of experiences data
//   };
    return(
        <>
         <Box sx={{ maxWidth: 800, padding: 3 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>Experience Details
          </Typography>

          {experiences.map((exp, index) => (
            <Card key={index} sx={{mt:"30px"}}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: "20px" ,}}>
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
    )
}


