import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import animationData from "../assets/arrow.gif";
import EastIcon from "@mui/icons-material/East";
import resumeing from "../assets/DashboardResume.png";
import stepToCreate1 from "../assets/stepToCreate1.png";
import stepToCreate2 from "../assets/stepToCreate2.png";
import stepToCreate3 from "../assets/stepToCreate3.png";
import stepToCreate4 from "../assets/stepToCreate4.png";
import review from "../assets/review1.png";
import Ats from "../assets/Ats.png";
import Coverletter from '../assets/coverletter.png';
import "./Page.css";
import Footer from "./footer";

const steps = [
  { image: stepToCreate1, title: "Choose a recruiter-approved template" },
  { image: stepToCreate2, title: "Add skills and bullet points in one click" },
  { image: stepToCreate3, title: "Finish your resume in minutes" },
  { image: stepToCreate4, title: "Download in Word, PDF and more" },
];

const Step = ({ image, title }) => (
  <Box sx={{ textAlign: "center" }}>
    <Box component="img" src={image} alt={title} sx={{ maxWidth: "6rem", maxHeight: "4rem" }} />
    <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
      {title}
    </Typography>
  </Box>
);

const reviewDetails = [
  {
    title: "Real feedback from a Resume Analyst",
    desc: "We’ll read your resume carefully and suggest improvements",
  },
  {
    title: "Section-by-section suggestions",
    desc:
      "Get detailed feedback on your summary, skills, work history, and education sections",
  },
  {
    title: "Get answers specific to your resume",
    desc: "Submit any questions you have for additional guidance",
  },
  {
    title: "Quick turnaround",
    desc: "Get your review back in just 2-3 business days",
  },
];

const Dashboard = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          sx={{
            mt: 5,
            alignItems: "center",
            justifyContent: "center",
            ml: { lg: 1, md: 0, sm: 0 },
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={8} lg={8} lignItems="center" justifyContent="center">
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                }}
              >
                <span style={{ fontSize: "70px" }}>A</span>ccelerate your job
                search with professionally designed resume templates
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  textAlign: "left",
                  mt: 2,
                }}
              >
                Choose from a curated selection of recruiter-approved designs,
                and effortlessly enhance your resume with preloaded skills and
                impactful phrases. Land your dream job in half the time!
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                component="img"
                src={animationData}
                alt="animation"
                sx={{
                  width: "100%",
                  maxWidth: "150px",
                  mb: { xs: 2, md: 0 },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                endIcon={<EastIcon />}
                size="large"
                href="/Choose-resume-templet"
              >
                Choose a Template
              </Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={{ textAlign: "center", ml: { md: "-3rem", lg: "-6rem" } }}>
              <Box
                component="img"
                src={resumeing}
                alt="Resume preview"
                sx={{
                  maxWidth: "270px",
                  height: "auto",
                  boxShadow: "12px 12px 18px rgba(0,0,0,0.1)",
                  mx: "auto", // Centers the image horizontally
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Additional Content */}
        <Grid item xs={12} lg={12} sx={{ mt: 8 }}>
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Make a Resume That Gets Results
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 4,
              mt: 5,
            }}
          >
            {steps.map((step, index) => (
              <Step key={index} image={step.image} title={step.title} />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mt: 9 }} lignItems="center" justifyContent="center">
          <Box
            sx={{
              textAlign: { xs: "center", md: "center", lg: "left" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                alignSelf: "center",
                ml: { xs: 5, sm: "0rem", lg: "6rem", md: "0" },
                maxWidth: "490px",
              }}
            >
              Matching cover letter
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Easily create a memorable cover letter with customizable
                suggested text in our Cover Letter Builder. Then, choose a
                design that aligns with your resume for a cohesive professional
                look
              </Typography>
            </Typography>
            <Box
              component="img"
              src={Coverletter}
              alt="Ats"
              sx={{
                height: "auto",
                maxWidth: "380px",
                ml: { xs: 5, sm: "11rem", lg: "3rem", md: "5rem" },
                borderRadius: "30px",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "center", lg: "left" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
            }}
          >
            <Box
              component="img"
              src={Ats}
              alt="Ats"
              sx={{
                height: "auto",
                maxWidth: "380px",
                ml: { xs: 5, sm: "8rem", lg: "7rem", md: "5rem" },
                borderRadius: "30px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                alignSelf: "center",
                ml: { xs: 0, sm: "3rem", lg: "0" },
                maxWidth: "490px",
              }}
            >
              ATS-friendly
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                Our resume builder is designed to pass through Applicant
                Tracking Systems (ATS) and catch the attention of hiring
                managers.
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mt: 9 }} className="review" justifyContent="center" alignItems="center">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Our resume builder includes a review from one of our experts
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row", lg: "row" },
              // mt: { xs: 2, md: 4, lg: 4 },
              gap: 5,
            }}
          >
            <Box
              component="img"
              alt="image"
              src={review}
              sx={{
                height: "auto",
                maxWidth: "220px",
                ml: { xs: "0rem", sm: "0rem", lg: "7rem" },
                borderRadius: "30px",
                alignSelf: "center",
                justifySelf: { xs: "center", md: "center", lg: "right" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ml: { xs: 0, sm: "0rem", lg: "4rem" },
              }}
            >
              <Box sx={{ flex: 1, textAlign: "left" }}>
                {reviewDetails.map((item, index) => (
                  <Box key={index} sx={{ mb: 2 }} textAlign={{ xs: "center", md: "left" }}>
                    <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" component="p">{item.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Footer />
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
