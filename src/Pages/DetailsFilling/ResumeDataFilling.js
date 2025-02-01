import React from "react";
// import axios from 'axios';
import {
  Container,
  Box,
  
  Button,
  Card,
} from '@mui/material';
import { MuiStepper } from "../../MuiDesigns/stepperComponent";
import { useStepper } from "../../MuiDesigns/useStepper";
import { Header } from "./Resume-pages/header";
import { Experience } from "./Resume-pages/experience";
import { Education } from "./Resume-pages/education";
import { Skill } from "./Resume-pages/skill";
import { Summary } from "./Resume-pages/summary";
import { AdditionalDetails } from "./Resume-pages/additional Details";

export const ResumeDataFilling = () => {
  // const resumeStats = {
  //   completionScore: 85,
  //   strengths: [
  //     'Strong professional experience section',
  //     'Well-structured education history',
  //     'Clear skill descriptions',
  //   ],
  //   improvements: [
  //     'Add more quantifiable achievements',
  //     'Include relevant certifications',
  //     'Expand on project details',
  //   ],
  //   experience: 4,
  //   education: 2,
  //   skills: 12,
  // };

  const Header_Page = () => (
    <Header />
  )
  const Education_Page = () => (
    <Education />
  )
  const Experience_Page = () => (
    <Experience />
  )
  const Skill_Page = () => (
    <Skill />
  )

  const Summary_Page = () => (
    <Summary />
  )

  const AdditionalDetails_Page = () => (
    <AdditionalDetails />
  )

  const { activeStep, handleNext, handleBack, isBackDisabled, isNextDisabled } = useStepper();


  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return Header_Page();
      case 1:
        return Experience_Page();
      case 2:
        return Education_Page();
      case 3:
        return Skill_Page();
      case 4:
        return Summary_Page();
      case 5:
        return AdditionalDetails_Page();
      default:
        return;
    }
  };
  //////Main return content of this page//////////
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
